const Discord = require("discord.js");

const { Client, Util, MessageEmbed, MessageAttachment, MessageMentions, Collection } = require("discord.js");

const dotenv = require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;

const PREFIX = '';

const fs = require("fs");

const cooldown = new Set();

const bot = new Client({
  disableMentions: "all"});
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

bot.on('message', async msg => {
  const args = msg.content.slice(PREFIX.length).split(" ");

  if(msg.author.bot) return;
  if(!msg.guild) return;
  
  const words = require('./commands/Basic/custom_words');
  words.run(bot, msg, args)
    
  switch (args[0]){
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
