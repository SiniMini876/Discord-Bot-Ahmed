module.exports = async (client) => {
    setInterval(() => {
        let guild = client.guilds.cache.get('693864294911049829');
        let memberCounterChannel = guild.channels.cache.get('791247896762515457');
        memberCounterChannel.setName(`יש אצלנו ${guild.memberCount.toLocaleString()} נחשים`);
    }, 1.8e+6)
}