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
    name: 'help',
    catagory: 'Basic',
    description: "Get some help",
    usage: "ping",
    run: (bot, msg, args) => { 
    const helpembed = new Discord.MessageEmbed()
    .setColor("#7289DA")
    .setDescription(
      `
__**Commands List**__

**פקודות לסקרים**
> \`poll\` = וואלק תכתוב poll ואז את השאלה שאתה רוצה לשאול

**פקודות לפריקינג מוזיקה בחדרים**

> **\`play [title/url]\`**
> **\`search [title]\`**
> \`skip = יעביר לך שיר\`
> \`stop = יעצור לך את הפריקינג דבר המחורבן הזה\`
> \`pause = זה כי אני מניאק ואני רוצה שרק תשהה את השיר\`
> \`resume = זה כי אתה מפגר שרוצה להמשיך עם הזוואות של המוזיקה הישראלית\`
> \`nowplaying = זה כי אני מגניב שרוצה להראות לך את השיר שמנוגן\`
> \`queue = זה כי אני מגניב שמראה לך את השירים שבתור\`
> \`volume = זה כי אני מתחשב בזה שהשיר אולי יחריש לך את האוזניים\``
    )
    .setFooter(
      "©️ SiniMini876",
    );
    msg.author.send(helpembed);
    msg.delete({ timeout: 5000 }).catch(console.error);
  }
}