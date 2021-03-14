const { MessageEmbed } = require("discord.js");

module.exports = {
    slash: true,
    testOnly: true,
    description: "Creates a poll!",
    minArgs: 1,
    expectedArgs: '<poll>',
    callback: async({args, channel, interaction, client}) => {
        let [poll] = args;
        let embed = new MessageEmbed()
        .setTitle(poll)
        .setAuthor(interaction.user.id);
        
        return embed
    }
}