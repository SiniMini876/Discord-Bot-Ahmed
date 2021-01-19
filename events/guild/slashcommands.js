const discord = require("discord.js")

module.exports = (client, interaction) => {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;

    if(command == 'ping') {
        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: {
                    content: "Hello World!"
                }
            }
        });
    }
}
async function createAPIMessage(interaction, content) {
    const apiMessage = await discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();
    
    return { ...apiMessage.data, files: apiMessage.files }}