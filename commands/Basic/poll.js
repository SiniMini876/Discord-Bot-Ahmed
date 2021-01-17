const Discord = require('discord.js');
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    name: "poll",
    aliases: [""],
    cooldown: 5,
    description: "The bot create a poll",
    async execute(bot, msg, args,){
        if(args[1]){
            let msgArgs = args.slice(1).join(" ");
            msg.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
            msg.delete({ timeout: 5000 }).catch(console.error);
        })}
    }
}