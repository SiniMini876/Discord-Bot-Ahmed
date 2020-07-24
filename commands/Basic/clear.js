const Discord = require('discord.js');
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = class clear {
    constructor(){
        this.name = 'clear',
        this.alias = ['c'],
        this.usage = '!clear'
    }
    run(bot, msg, args){
        if(!msg.member.roles.cache.find(r => r.name === "OP")) return msg.channel.send('סורי אחי, אין לך רשות לעשות מעשה שכזה. יבומר');
        if(!args[1]) return msg.channel.send('תגיד כמה הודעות למחוק יאפס')
        msg.channel.bulkDelete(args[1]).catch(console.error);
    }
}