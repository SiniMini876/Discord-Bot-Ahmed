const Discord = require("discord.js");

const { Client, Util, MessageEmbed, MessageAttachment, MessageMentions, Collection } = require("discord.js");

const dotenv = require("dotenv").config();

const ms = require('ms');

const TOKEN = process.env.BOT_TOKEN;

const PREFIX = '';

const fs = require("fs");

const cooldown = new Set();

const bot = new Client({
  partials: ['MESSAGE', 'REACTION']
});
require("./server.js");

bot.commands = new Discord.Collection();

  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
  for(const file of commandFiles){
    const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () =>
  console.log(`${bot.user.tag} has been successfully turned on!`)
);

bot.on('ready', () => {
    console.log('This bot is active!');
    bot.user.setActivity('NOD ANAK', { type: "PLAYING"}).catch(console.error);
})

bot.on('messageReactionAdd', async (reaction, user) => {
  
  let applyRole = async () => {
    let emojiName = reaction.emoji.name;
    let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
    let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
    try {
    if(role && member){
      console.log("Role and Member are found.");
      await member.roles.add(role);
      console.log('The member has given the role "Member".');
      }
    } catch(err){
      console.log(err);
    }
  }
  if(reaction.message.partial){
    try{
    var msg = await reaction.message.fetch();
    if(msg.id === '730381895132643328'){
      console.log('Cached')
      applyRole();
    }
  }catch(err) {
    console.log(err);
    }
  }else{
    console.log('Not a partial')
    if(reaction.message.id === '730381895132643328'){
      applyRole();
    }
  }
});

bot.on('guildMemberAdd', member => {
  member.roles.add('MEMBER');
});

bot.on('message', async msg => {
  const args = msg.content.slice(PREFIX.length).split(" ");

  if(msg.author.bot) return;
  if(!msg.guild) return;
  
  const words = require('./commands/Basic/custom_words');
  words.run(bot, msg, args)
    
  switch (args[0]){
    case '!mute':
      var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
      if(!person) return;

      var mainrole = msg.guild.roles.cache.find(role => role.name === 'MEMBER');
      var muterole = msg.guild.roles.cache.find(role => role.name === 'MUTE');

      if(!muterole) return msg.channel.send("סורי, לא מצאתי את הרול של המיוט");

      var time = args[2]

      if(!time) return msg.channel.send("אין זמן");

      person.roles.remove(mainrole.id);
      person.roles.add(muterole.id);

      msg.channel.send(`@${person.user.tag} הלך לישון ל ${ms(ms(time))}`)

      setTimeout(function(){
        person.roles.add(mainrole.id);
        person.roles.remove(muterole.id);
        msg.channel.send(`@${person.user.tag} קם מהשינה`)
      }, ms(time))


      break;
    case 'rules':
      const rule = require('./commands/Basic/rules.js');
      rule.run(bot, msg, args)
      break;
    case 'ping':
      bot.commands.get('ping').execute(msg, args)
      break;
    case 'אני':
      const אני = require('./commands/Basic/אני.js');
      אני.run(bot, msg, args)
      break;
    case 'poll':
      const poll = require('./commands/Basic/poll.js');
      poll.run(bot, msg, args)
      break;
    case 'help':
      const help = require('./commands/Basic/help.js');
      help.run(bot, msg, args)
      break;
    case 'clear':
      if(!msg.member.roles.cache.find(r => r.name === "OP")) return msg.channel.send('סורי אחי, אין לך רשות לעשות מעשה שכזה. יבומר');
      if(!args[1]) return msg.channel.send('תגיד כמה הודעות למחוק יאפס')
      msg.channel.bulkDelete(args[1]).catch(console.error);
      break;
  }
  command = args.shift().toLowerCase();
});

bot.login(TOKEN);
