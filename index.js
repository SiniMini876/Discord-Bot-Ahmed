const Discord = require("discord.js");

const { Client, Util, MessageEmbed, MessageAttachment, MessageMentions, Collection } = require("discord.js");

const dotenv = require('dotenv').config();

const ms = require('ms');

const mc = require('minecraft-server-util');

const BOT_TOKEN = process.env.BOT_TOKEN;

const { CommandHandler } = require('djs-commands');
const { connect } = require("superagent");
const CHBasic = new CommandHandler({
  folder:__dirname + "/commands/Basic/",
  prefix: ['!']
});
const PREFIX = '!';

const bot = new Client({
  partials: ['MESSAGE', 'REACTION']
});

bot.on("ready", () => {
  console.log(`${bot.user.tag} has been successfully turned on!`)
  bot.user.setActivity('להרביץ ליהודים', { type: "PLAYING"}).catch(console.error);

  var textChannel = bot.channels.cache.find(channel => channel.id === '719178323200180266');

  // setInterval(() => {
  //   var dog = require('./commands/Settings/dog.js')
  //   dog.run(bot, textChannel)
  // }, 10000000000000000000000000000000000000000000000000000000000);
  }
);

bot.on('messageReactionAdd', async (reaction, user) => {
  const react = require('./commands/Settings/rules.js');
  react.run(bot, reaction, user);
});
bot.on('message', msg => {
  const words = require('./commands/Settings/custom_words.js');
  words.run(bot, msg)
})
bot.on('message', (msg) => {
  if(msg.author.bot) return;
  if(!msg.guild) return;
  if(msg.member.roles.cache.find(r => r.name === 'חד קרן')){
    msg.channel.send('אני חושב שראיתי חד קרן מעליי <:ABA:726561158869549186>').then(m => m.delete({timeout: 10000}));
  }

  let args = msg.content.split(" ");
  let command = args[0];
  let cmd = CHBasic.getCommand(command);
  if(!cmd) return



  try{
    cmd.run(bot, msg, args, ms, mc);
  }catch(e){
    console.log(e)
  }

  command = args.shift().toLowerCase();
});



bot.login(BOT_TOKEN);
