module.exports = (Discord, client, guildMember) => {
    let welcomeChannel = guildMember.guild.channels.cache.get('719178323200180266').send(`מה המצב <@${guildMember.user.id}> ברוך הבא לשרת המגניב שלנו!`)
}