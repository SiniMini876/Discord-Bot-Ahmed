const message = require("../../events/guild/message");

module.exports = {
    name: "createroom",
    aliases: ["cr"],
    cooldown: 5,
    description: "The bot create a tempoery voice room.",
    async execute(client, msg, args) {
        if (!args[1])
            return msg.channel.send("אתה צריך לכתוב את המקסימום אנשים לחדר.");

        const newVoiceChannel = await msg.guild.channels.create(
            `חדר פרטי - ${msg.author.username} -  ${args[1]}`,
            {
                type: "voice",
                parent: "762279647815401483",
                userLimit: args[1],
            }
        );
        const voiceChannel = msg.guild.channels.cache.find(
            (c) => c.id === newVoiceChannel.id
        );
        try {
            msg.member.voice.setChannel(voiceChannel);
        } catch (err) {}

        const inviteVoice = await voiceChannel.createInvite({
            maxAge: 15,
            maxUses: args[1],
            reason: `Private room for ${msg.member}`,
        });

        const inviteURL = await msg.channel.send(inviteVoice.url);

        msg.delete();
        setInterval(() => {
                if(msg.guild.channels.cache.find(c => c.id === voiceChannel.id)){
                    if (voiceChannel.members.array().length === 0) {
                        voiceChannel.delete().catch();
                        inviteURL.delete().catch();
                        return;
                        } else if(voiceChannel.full) {
                            voiceChannel.overwritePermissions([{
                                    id: '720677306036781218',
                                    deny: ['VIEW_CHANNEL'],
                                },{
                                    id: msg.author.id,
                                    allow: ['VIEW_CHANNEL', 'MOVE_MEMBERS']
                                }], 'The channel is full');
                        } else {
                            voiceChannel.overwritePermissions([{
                                id: '474584102335676427',
                                allow: ['VIEW_CHANNEL'],
                            }], 'The channel is NOT full');
                        }
                    } else return;
            }, 2000);
        
    }
};
