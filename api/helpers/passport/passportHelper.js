import passport from "passport";
import data from "../../../auto_setting.js";
import { Strategy as DiscordStrategy } from "passport-discord";
import { connect } from "../../connection/connection.js";
import { ObjectId } from "mongodb";

passport.serializeUser((user, done) => {
    console.log("serializeUser");
    done(null, user.discordId);
});

passport.deserializeUser(async (id, done)=> {
    try {
        
        const db = await connect();
        const collection = db.collection("discord");
        !user 
            ? done(new Error('user not found', null))
            : done(null, user) 
        

    } catch (error) {

        console.log(error);
        return done(error, null);
    }
});

const scopes = ['idenrify', 'email', 'guilds', 'guilds.join'];

passport.use(
    new DiscordStrategy(
        {
            clientID: data.CREDENTIALS_DISCORD.CLIENT,
            clientSecret: data.CREDENTIALS_DISCORD.CLIENT_SECRET,
            callbackURL: data.CREDENTIALS_DISCORD.DISCROD_URL,
            scope: scopes
        },

        async (accessToken, refreshToken, profile, cb) => {
            try {
                
                const db = await connect();
                const collection = db.collection("discord");
                const exist_user = await collection.findOne({ discordId: profile.id })
                if(exist_user) return cb(null, exist_user);

                const new_user = {
                    discordId: profile.id,
                    username: profile.username,
                    global_name: profile.global_name,
                    email: profile.email,
                    guilds: profile.guilds
                };

                const result = await collection.insertOne(new_user);

                if (!result.acknowledged) return cb(new Error('Error al crear un nuevo usuario', null);

                console.log(profile);

                return cb(null, new_user);

            } catch (error) {
                
                console.log(error);
                return cb(error, null)
            }
        }
    )
)




















