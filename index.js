const Discord = require("discord.js");

const { Client, Util, MessageEmbed, MessageAttachment, MessageMentions, Collection } = require("discord.js");

const ms = require('ms');

const mc = require('minecraft-server-util');

const config = require('./config.json');

const Hero_TOKEN = process.env.BOT_TOKEN;

const PC_TOKEN = config.TOKEN;

const { CommandHandler } = require('djs-commands');
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
  bot.user.setActivity('NOD ANAK', { type: "PLAYING"}).catch(console.error);
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

bot.login(Hero_TOKEN);
