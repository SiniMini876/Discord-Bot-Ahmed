const Discord = require('discord.js');

module.exports = {
    slash: true,
    testOnly: true,
    description: "!קונכיית הקסם",
    minArgs: 1,
    expectedArgs: '<Question>',
    callback: async ({message, args, client, interaction}) => {
        const [Question] = args;
        let replies = ['כן', 'לא', 'אני לא יודע, מה אני יעשה', 'תשאל מאוחר יותר אני נכה מידי כרגע'];
        let result = Math.floor((Math.random() * replies.length));

        let ballembed = new Discord.MessageEmbed()
        .setTitle('קונכיית הקסם!')
        .setFooter(interaction.member.user.username)
        .setColor('#FF9900')
        .addField('שאלה', Question)
        .addField('תשובה', replies[result])
        .setThumbnail('https://i.kym-cdn.com/photos/images/masonry/000/355/434/560.gif');
        

        return ballembed
    }
}