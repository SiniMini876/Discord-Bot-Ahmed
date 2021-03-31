const { MessageEmbed } = require("discord.js");

module.exports = {
    slash: true,
    testOnly: true,
    description: "!יוצר סקר",
    minArgs: 1,
    expectedArgs: '<poll>',
    callback: async({args, channel, interaction, client}) => {
        let [poll] = args;
        let embed = new MessageEmbed()
        .setTitle(poll)
        .setAuthor(interaction.member.user.username)
        .setDescription("אנא עשה ריאקט עם האימוג'י ה👍 או ה👎, תודה")
        return embed
    }
}