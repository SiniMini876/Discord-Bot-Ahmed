const Discord = require("discord.js");
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const dotenv = require("dotenv").config();
const TOKEN = process.env.BOT_TOKEN;
const GOOGLE_API_KEY = process.env.YTAPI_KEY;
const PREFIX = process.env.PREFIX;
const cooldown = new Set();
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

exports.run = async(bot, msg, args) => {
    const helpembed = new Discord.MessageEmbed()
    .setColor("#7289DA")
    .setDescription(
      `
__**Commands List**__

**Poll Commands List**
> \`poll\` = help for the poll feature 

**Music Bot Commands List**
> \`play\` > **\`play [title/url]\`**
> \`search\` > **\`search [title]\`**
> \`skip\`, \`stop\`,  \`pause\`, \`resume\`
> \`nowplaying\`, \`queue\`, \`volume\``
    )
    .setFooter(
      "©️ SiniMini876",
    );
  msg.author.send(helpembed);
  msg.delete({ timeout: 5000 }).catch(console.error);
}