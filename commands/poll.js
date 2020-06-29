const Discord = require('discord.js');
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async(bot, message, args) => {
    const Embd = new MessageEmbed()
    .setColor(0x00BDFF)
    .setTitle("מדריך הכנת סקרים בשרת נאד יפה")
    .setDescription("וואלק תכתוב poll ואז את השאלה שאתה רוצה לשאול")

    if(!args[1]){
        message.author.send(Embd);
        message.delete({ timeout: 5000 }).catch(console.error);
    }
    if(args[1]){
        let msgArgs = args.slice(1).join(" ");
        message.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
            message.delete({ timeout: 5000 }).catch(console.error);
        })}
}