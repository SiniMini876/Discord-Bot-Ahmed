module.exports = class clear {
    constructor(){
        this.name = 'createchannel',
        this.alias = ['ch'],
        this.usage = '!createchannel <max members>'
    }
    run(bot, msg, args){

	if (!args[1]) return msg.channel.send("אתה צריך לכתוב את המקסימום אנשים לחדר.");

	const newVoiceChannel = await msg.guild.channels.create(
		`חדר פרטי - ${args[1]}`,
		{
			type: "voice",
			parent: "762279647815401483",
			userLimit: args[1],
		}
	);
	const voiceChannel = msg.guild.channels.cache.find(
		(c) => c.id === newVoiceChannel.id
	);

	const inviteVoice = await voiceChannel.createInvite({
		maxAge: 15,
		maxUses: args[1],
		reason: `Private room for ${msg.member}`,
	});

	const inviteURL = await msg.channel.send(inviteVoice.url);

	msg.delete();

	setInterval(() => {
		while (
			msg.guild.channels.cache.find(
				(c) => c.id === newVoiceChannel.id
			)
		) {
			if (!voiceChannel.members.find((m) => m.id === msg.author.id)) {
				voiceChannel.delete().catch();
				inviteURL.delete().catch();
			}
			return;
		}
	}, 10000);

    }
}