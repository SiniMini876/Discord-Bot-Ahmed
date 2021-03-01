const fs = require("fs");

module.exports = (Discord, client) => {
    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`src/events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of event_files){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            if(event_name === "slashcommands"){
                client.ws.on('INTERACTION_CREATE', interaction => {
                    require('../events/guild/slashcommands')(client, interaction)
                    })
                } else {
                    client.on(event_name, event.bind(null, Discord, client))
                }
        }
    }

    ['client', 'guild'].forEach(event => load_dir(event))
}