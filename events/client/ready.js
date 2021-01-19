const express = require('express');
const app = express();
const port = 3000;

module.exports = (Discord, client) => {

    app.get('/', (req, res) => res.send('AhmedBot is Active!'));

    app.listen(port, () => console.log(`AhmedBot is Active and lisening on port ${port}`));

    client.user.setActivity('להרביץ ליהודים', { type: "PLAYING"}).catch(console.error);

    setInterval(() => {
        let guild = client.guilds.cache.get('693864294911049829');
        let memberCounterChannel = guild.channels.cache.get('791247896762515457');
        memberCounterChannel.setName(`יש אצלנו ${guild.memberCount.toLocaleString()} נחשים`);
    }, 1.8e+6)
    setInterval(() => {
        let guild = client.guilds.cache.find(g => g.id === "693864294911049829");
        let textChannel = guild.channels.cache.find(c => c.id === "719178323200180266");
        const dog24 = require("../../commands/Settings/dog").run(client, textChannel)
    }, 8.64e+7)

    // creating slash commands

    require('../../commands/Settings/slashcommandsproperties')(client, Discord);
}