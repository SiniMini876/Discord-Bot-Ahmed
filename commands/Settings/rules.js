const Discord = require("discord.js");
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const dotenv = require("dotenv").config();
const TOKEN = process.env.BOT_TOKEN;
const GOOGLE_API_KEY = process.env.YTAPI_KEY;
const PREFIX = process.env.PREFIX;
const cooldown = new Set();
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

module.exports = {
    name: 'help',
    catagory: 'Basic',
    description: "Get some help",
    usage: "ping",
    run: async(bot, reaction, user) => { 

        let applyRole = async () => {
            let emojiName = reaction.emoji.name;
            let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
            let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            try {
            if(role && member){
              console.log("Role and Member are found.");
              await member.roles.add(role);
              console.log('The member has given the role "Member".');
              }
            } catch(err){
              console.log(err);
            }
          }
          if(reaction.message.partial){
            try{
            var msg = await reaction.message.fetch();
            if(msg.id === '730381895132643328'){
              console.log('Cached')
              applyRole();
            }
          }catch(err) {
            console.log(err);
            }
          }else{
            console.log('Not a partial')
            if(reaction.message.id === '730381895132643328'){
              applyRole();
            }
          }
    
    }
}