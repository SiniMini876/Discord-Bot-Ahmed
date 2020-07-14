const Discord = require('discord.js');
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    name: 'poll',
    description: 'Makes polls',
    run: (bot, message, args) => {
        if(args[1]){
            let msgArgs = args.slice(1).join(" ");
            message.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
            message.delete({ timeout: 5000 }).catch(console.error);
        })}
    }
}