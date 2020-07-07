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

module.exports = {
    name: 'rules',
    catagory: 'Basic',
    description: "Get some help",
    usage: "ping",
    run: (bot, msg, args) => { 
    const rulesembed = new Discord.MessageEmbed()
    .setColor("#7289DA")
    .setDescription(
      `
__**חוקים לשרת הדיסוקרד - Buganim**__

> **\`1. לא להספים\`**
> **\`2. לא להספים את הבוטים\`**
> \`3. תשתמשו בבוטים הם אחלה\`
> \`4. מה זה שרת של יוטיובר? תעשו מה שבא אין לי כוח\``
    )
    .setFooter(
      "©️ SiniMini876",
    );
    msg.channel.send(rulesembed);
    msg.channel.send("כדי להצטרף לשרת אנא לחץ על האימוג'י המפחיד שמתחת להודעה.");
    msg.delete({ timeout: 5000 }).catch(console.error);
  }
}