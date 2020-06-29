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
    if (!msg.member.voice.channel)
      return msg.channel.send(
        "תקשיב, אני צריך שתהיה בחדר שמע כדי שאמשימע לך. מה אני קוסם?"
      );msg.delete({ timeout: 5000 }).catch(console.error);
    if (!serverQueue) return msg.channel.send("אין שום מוזיקה במתנגנת כרגע");
    if (!args[1])
      return msg.channel.send(
        `עוצמת השמע שלך כרגע היא: **\`${serverQueue.volume}%\`** אם ברצונך לשנות אותה תכתוב volume ואז את העוצמה שאתה רוצה )העוצמה נקבעת אך ורק מ1 ל100)`
      );
    if (isNaN(args[1]) || args[1] > 100)
      return msg.channel.send(
        "עוצמת שמע יכולה להיקבע רק על פי **1** - **100**"
      );msg.delete({ timeout: 5000 }).catch(console.error);
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolume(args[1] / 100);
    return msg.channel.send(`I set the volume to: **\`${args[1]}%\`**`);
}