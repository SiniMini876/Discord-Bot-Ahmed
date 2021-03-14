require("dotenv").config();

module.exports = async (Discord, client, message) => {
    if(message.author.bot) return
    if(message.content === "/coopkick supercarrot17") {
        let poll = await message.channel.send("<@752139100340879460> באן לעדי");
        poll.react("👍")
        let sini = await message.guild.members.cache.find(m => m.id === "474584102335676427");
        let erez = await message.guild.members.cache.find(m => m.id === "315849563594293259");
        let kfir = await message.guild.members.cache.find(m => m.id === "741699710674272327");
        let adiZ = await message.guild.members.cache.find(m => m.id === "487702977000243212");
        let ari = await message.guild.members.cache.find(m => m.id === "472071709722411026");
        setInterval(async () => {
            let adiS = message.guild.members.cache.find(m => m.id === "752139100340879460");
            if(poll.deleted) return setTimeout(() => {adi.roles.add("792682679682203719")}, 300000)
            if(
            poll.reactions.resolve("👍").users.cache.array().includes(sini.user) &&
            poll.reactions.resolve("👍").users.cache.array().includes(erez.user) &&
            poll.reactions.resolve("👍").users.cache.array().includes(kfir.user) &&
            poll.reactions.resolve("👍").users.cache.array().includes(adiZ.user) &&
            poll.reactions.resolve("👍").users.cache.array().includes(ari.user)){
                message.channel.send("העם אמר את דברו, מורידים לעדי את הרול SKYBLOCK").then(m => m.delete({timeout: 5000}));
                adiS.roles.remove("792682679682203719");
                poll.delete()
            }
        }, 1000)
    }
    if(!message.content.startsWith(client.prefix)){
        require('../../commands/Settings/custom_words').run(client, message);
        return;
    };

    let args = message.content.slice(client.prefix.length).split(/ +/);
    let arg = message.content.split(' ');
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd)
    || client.commands.find(cd => cd.aliases && cd.aliases.includes(cmd));
    if(!command) return;

    const cooldowns = client.cooldowns;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
        }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name || command.aliases);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(
            `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
                );
            }
        }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {    
        command.execute(client, message, arg, args)
    } catch(err) {
        console.log(err)
        return message.channel.send(` הייתה בעיה לבצע את הפקודה, אם תקלה זו חוזרת אנא פנה לסיני הגדול ` + '<@474584102335676427>')
    }
}