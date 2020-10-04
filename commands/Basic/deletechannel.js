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
        msg.delete();
        if (voiceChannel.parentID === "762279647815401483") return voiceChannel.delete();
        
    }
}