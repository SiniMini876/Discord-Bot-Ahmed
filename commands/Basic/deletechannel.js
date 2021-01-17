module.exports = {
    name: "deleteroom",
    aliases: ["dr"],
    cooldown: 10,
    description: "The bot delete the tempoery voice room.",
    usage: "!deleteroom",
    async execute(bot, msg, args){
        const voiceChannel = msg.member.guild.channels.cache.find(
            (c) => c.id === msg.member.voice.channelID
        );
        msg.delete();
        if (voiceChannel.parentID === "762279647815401483") return voiceChannel.delete();
        
    }
}