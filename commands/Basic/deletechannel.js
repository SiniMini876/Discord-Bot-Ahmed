module.exports = class clear {
    constructor(){
        this.name = 'channeldelete',
        this.alias = ['cd'],
        this.usage = '!clear'
    }
    run(bot, msg, args){
        const voiceChannel = msg.member.guild.channels.cache.find(
            (c) => c.id === msg.member.voice.channelID
        );
        if (!voiceChannel.parentID === "693864295510966314") return;

        voiceChannel.delete();
    }
}