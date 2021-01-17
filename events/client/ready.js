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
}