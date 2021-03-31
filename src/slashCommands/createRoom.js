let parentID = "762279647815401483"

module.exports = {
    slash: true,
    testOnly: true,
    minArgs: 1,
    expectedArgs: '<Maximum>',
    description: "Creates a room",
    callback: async ({ args, client, channel, interaction}) => {
        const [Maximum] = args;
        const newVoiceChannel = await channel.guild.channels.create(
            `חדר פרטי - ${interaction.member.user.username} - ${Maximum}`,
            {
                type: "voice",
                parent: parentID,
                userLimit: Maximum
            }
        );
        const member = channel.guild.members.cache.find(m => m.id === interaction.member.user.id)
        const voiceChannel = channel.guild.channels.cache.find(
            (c) => c.id === newVoiceChannel.id
        );

        if(member.voice.channel){
            member.voice.setChannel(voiceChannel);
        }

        const inviteVoice = await voiceChannel.createInvite({
            maxAge: 15,
            maxUses: Maximum,
            reason: `Private room for ${member}`,
        });

        setInterval(() => {
            if(channel.guild.channels.cache.find(c => c.id === voiceChannel.id)){
                if (voiceChannel.members.array().length === 0) {
                    voiceChannel.delete().catch();
                    return;
                    } else if(voiceChannel.full) {
                        voiceChannel.overwritePermissions([{
                                id: '720677306036781218',
                                deny: ['VIEW_CHANNEL'],
                            },{
                                id: member.id,
                                allow: ['VIEW_CHANNEL', 'MOVE_MEMBERS']
                            }], 'The channel is full');
                    } else {
                        voiceChannel.overwritePermissions([{
                            id: '474584102335676427',
                            allow: ['VIEW_CHANNEL'],
                        }], 'The channel is NOT full');
                    }
                } else return;
        }, 5000);

        return `Created The Room! Click the \`Join\` button to join the call!, ${inviteVoice.url}`
        
    }
}