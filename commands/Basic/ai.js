const Discord = require('discord.js');
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");


module.exports = {
    name: "ai",
    cooldown: 10,
    aliases: ['end'],
    usage: "!ai <hello>",
    description: "The bot opens an AI converstaion",
    async execute(bot, msg, args){

        alexa.getReply(args.join(' ')).then(reply => {
            msg.channel.send(reply)
        })
    }
}