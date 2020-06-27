const Discord = require('discord.js');
module.exports = {
    name: 'poll',
    description: "do poll",
    execute(message, args){
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
}