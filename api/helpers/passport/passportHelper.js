import passport from "passport";
import { Strategy } from "passport-discord";
import data from "../../../auto_setting.js";
import { connect as connectToMongoDB } from "../../connection/connection.js";
import autoIncrementar from "../auto_increment.js";

const discord = data.CREDENTIALS_DISCORD;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const db = await connectToMongoDB();
    const users = db.collection("users");
    const user = await users.findOne({ id });

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
      scope: ['identify', 'guilds', 'guilds.join', 'guilds.members.read'],
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const db = await connectToMongoDB();
        const users = db.collection("users");

        console.log('Estoy en la db: '+ db);
        console.log('Soy el usuario: '+ users);

        const existUser = await users.findOne({ id: profile.id });

        console.log('existo? ' + existUser);

        if (existUser) {
          profile.id_user = existUser.id_user;
          profile.avatar = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}`;
          return done(null, profile);
        } else {
          const isInServer = profile.guilds.some(guild => guild.id === discord.server);

          if (profile.guilds.length < 1 || !isInServer) {
            return done(null, false, { message: "401" });
          } else {
            const newUser = {
              id_user: await autoIncrementar("user", "id_user"),
              username: profile.username,
              global_name: profile.global_name,
              discord_id: profile.id,
              authentication: profile.guilds,
              rol: 'user',
              created_in: new Date(),
            };

            console.log(newUser);

            profile.id_user = newUser.id_user;
            profile.avatar = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}`;
            await users.insertOne(newUser);
            return done(null, profile);
          }
        }
      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  )
);

export default passport;
