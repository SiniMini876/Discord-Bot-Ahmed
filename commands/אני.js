const Discord = require('discord.js');
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async(bot, message, args) => {
    if(!args[1]){
        return;}
        if(args[1]){
        message.channel.send(`שלום לך ${args[1]} אני אחמד`)
    }
}