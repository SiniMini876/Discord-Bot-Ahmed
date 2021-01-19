module.exports = (client, Discord) => {
    let buganim = '693864294911049829';
    client.api.applications(client.user.id).guilds(buganim).commands.post({
        data: {
            name: "ping",
            description: "Replies with the ping!"
        }
    });
}