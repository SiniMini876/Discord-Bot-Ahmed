const Discord = require("discord.js");
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const dotenv = require("dotenv").config();
const PREFIX = process.env.PREFIX;
const cooldown = new Set();
const queue = new Map();

module.exports = {
    name: 'mute',
    catagory: 'Basic',
    description: "mute someone",
    usage: "mute",
    run: (bot, msg, args, ms) => { 

        var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
        if(!person) return;
  
        var mainrole = msg.guild.roles.cache.find(role => role.name === 'MEMBER');
        var muterole = msg.guild.roles.cache.find(role => role.name === 'MUTE');
        var policerole = msg.guild.roles.cache.find(role => role.name === 'POLICE');
        var shingrole = msg.guild.roles.cache.find(role => role.name === 'שינגעלינג');
        
        if(!muterole) return msg.channel.send("סורי, לא מצאתי את הרול של המיוט");
  
        var time = args[2]
  
        if(!time) return msg.channel.send("אין זמן");
  
        person.roles.remove(mainrole.id);

        person.roles.add(muterole.id);
  
        msg.channel.send(`${person} הלך לישון ל ${ms(ms(time))}`)
  
        setTimeout(function(){
          person.roles.add(mainrole.id);
          person.roles.remove(muterole.id);
          msg.channel.send(`${person} קם מהשינה`)
        }, ms(time))

  }
}