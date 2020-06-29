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
const args = msg.content.split(" ");
const searchString = args.slice(1).join(" ");
const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
const serverQueue = queue.get(msg.guild.id);

exports.run = async(bot, msg, args) => {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel)
      return msg.channel.send(
        "תקשיב, אני צריך שתהיה בחדר שמע כדי שאשמיע לך. מה אני קוסם?"
      );
      msg.delete({ timeout: 5000 }).catch(console.error);
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        "Sorry, but I need **`CONNECT`** permissions to proceed!"
      );
    }msg.delete({ timeout: 5000 }).catch(console.error);
    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        "Sorry, but I need **`SPEAK`** permissions to proceed!"
      );
    }msg.delete({ timeout: 5000 }).catch(console.error);
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(
        `<:yes:591629527571234819>  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue!`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          var video = await youtube.getVideoByID(videos[0].id);
          if (!video)
            return msg.channel.send(
              "🆘  **|**  לא מצאתי כלום, תחפש משהו אחר כי אם לא אני אפליץ עליך"
            );
        } catch (err) {
          console.error(err);
          return msg.channel.send(
            "🆘  **|**  לא מצאתי כלום, תחפש משהו אחר כי אם לא אני אפליץ עליך"
          );
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
}