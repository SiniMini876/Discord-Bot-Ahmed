require("dotenv").config();
const alexa_api = require("alexa-bot-api");
const alexa = new alexa_api();

module.exports = (Discord, client, message) => {
    if(message.author.bot) return
    if(!message.content.startsWith(client.prefix)){
        if(message.channel.id === "810559061967241276") {
            return alexa.getReply(message.content).then(reply => {
                try{
                    let replyFilter = reply.replace("סקס", "") || reply.replace("פוני", "") || reply.replace("I would like to go to my bedroom with you.", "b")
                    message.channel.send(replyFilter)

                } catch(err) {
                    throw err
                }
            })
        }
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