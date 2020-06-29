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
  if (!serverQueue)
    return msg.channel.send(
      "אין שום שיר שאני אוכל להעביר לך"
    );msg.delete({ timeout: 5000 }).catch(console.error);
  serverQueue.connection.dispatcher.end("Skip command has been used!");
  return msg.channel.send("⏭️  **|**  Skip command has been used!");
}