import passport from "passport";
import { Strategy } from "passport-discord";
import data from "../../../auto_setting.js";
import { connect } from "../../connection/connection.js";
import autoIncrementar from "../auto_increment.js";
// import incidences from "../../routers/incidences.routes.js";


const discord = data.CREDENTIALS_DISCORD;


passport.serializeUser((user, done) => {
  done(null, user[0].id_user);
});

passport.deserializeUser(async (id, done) => {
  try {

    const con = await connect();
    //? Esta colección es temporal
    //? Toca esperar a la validación, para ver si pasa y validar que datos pasan
    //? cuando eso pase, se cambiará a la colección de "user"
    const collection = await con.collection('discord');
    const user = await collection.findOne({ id_user: id });

    done(null, user);

  } catch (error) {

    done(error, null);

  }
});


passport.use(
  new Strategy(
    {
      clientID: discord.CLIENT,
      clientSecret: discord.CLIENT_SECRET,
      callbackURL: discord.URL,
      scope: ['identify', 'guilds']
    },

    async (accessToken, refreshToken, profile, done) => {
      try {

        const con = await connect();
        const discord = await con.collection('discord');

        let exist_user = await discord.findOne({ discord_id: profile.id }).toArray()

        if (exist_user.lenght == 0) return done(null, exist_user);

        let new_user = {
          id_user: ( await autoIncrementar("discord", "id_user") ),
          username: profile.username,
          global_name: profile.global_name,
          discord_id: profile.id,
          id_rol: 2,
          created_in: new Date()
        };

        await discord.inserOne(new_user);
        done(null, new_user); 

      } catch (error) {

        console.error(error);
        return done(error, null)
      }
    }
  )
)

export default passport;













// import passport from "passport";
// import data from "../../../auto_setting.js";
// import { Strategy as DiscordStrategy } from "passport-discord";
// import { connect } from "../../connection/connection.js";

// passport.serializeUser((user, done) => {
//     console.log("serializeUser");
//     done(null, user.discordId);
// });

// passport.deserializeUser(async (id, done) => {
//     try {
//         const db = await con();
//         const collection = db.collection("discord");
//         const user = await collection.find({ discordId: id });

//         if (!user) {
//             return done(new Error('Usuario no encontrado'), null);
//         }

//         return done(null, user);

//     } catch (error) {
//         console.error(error);

//         return done(error, null);
//     }
// });

// const scopes = ['identify', 'email', 'guilds', 'guilds.join']

// passport.use(
//     new DiscordStrategy(
//         {
//             clientID: data.CREDENTIALS_DISCORD.CLIENT,
//             clientSecret: data.CREDENTIALS_DISCORD.CLIENT_SECRET,
//             callbackURL: data.CREDENTIALS_DISCORD.DISCROD_URL,
//             scope: scopes
//         },

//         async (accessToken, refreshToken, profile, cb) => {
//             try {

//                 const db = await connect();
//                 const collection = db.collection("discord");
//                 const exist_user = await collection.findOne({ discordId: profile.id });

//                 console.log(exist_user);

//                 if (exist_user) return cb(null, exist_user);

//                 const new_user = {
//                     discordId: profile.id,
//                     username: profile.username,
//                     global_name: profile.global_name,
//                     email: profile.email,
//                     guilds: profile.guilds,
//                 };
//                 const result = await collection.insertOne(new_user);

//                 if (!result.acknowledged) return cb(new Error('Error al crear un nuevo usuario'), null);

//                 console.log(profile);

//                 return cb(null, new_user);


//             } catch (error) {

//                 console.log(error);
//                 return cb(error, null)
//             }
//         }
//     )
// );

// export default passport;




















