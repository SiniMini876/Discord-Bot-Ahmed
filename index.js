const Discord = require("discord.js");

const { Client, Util, MessageEmbed, MessageAttachment, MessageMentions, Collection } = require("discord.js");

const ms = require('ms');

const mc = require('minecraft-server-util');

const config = require('./config.json');

const Hero_TOKEN = process.env.BOT_TOKEN;

const PC_TOKEN = config.TOKEN;

const PREFIX = '!';

const bot = new Client({
  partials: ['MESSAGE', 'REACTION']
});

bot.on("ready", () => {
  console.log(`${bot.user.tag} has been successfully turned on!`)

  }
);

bot.on('ready', () => {
    console.log('This bot is active!');
    bot.user.setActivity('NOD ANAK', { type: "PLAYING"}).catch(console.error);
})

bot.on('messageReactionAdd', async (reaction, user) => {
  
  const react = require('./commands/Settings/rules.js');
  react.run(bot, reaction, user);

});

bot.on('message', async msg => {

  const args = msg.content.slice(PREFIX.length).split(" ");

  if(msg.author.bot) return;
  if(!msg.guild) return;
  
  const words = require('./commands/Basic/custom_words.js');
  words.run(bot, msg, args)
    
  switch (args[0]){
    case 'nod':
      const nod = require('./commands/Basic/nod_anak.js');
      nod.run(bot, msg, args, mc)
      break;
    case 'mute':
      const mute = require('./commands/Basic/mute.js');
      mute.run(bot, msg, args, ms)
      break;
    case 'rules':
      const rule = require('./commands/Basic/rules.js');
      rule.run(bot, msg, args)
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

bot.login(PC_TOKEN);
