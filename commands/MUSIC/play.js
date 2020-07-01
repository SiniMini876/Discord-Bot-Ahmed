
module.exports = {
    name: 'play',
    catagory: 'MUSIC  ',
    description: "PLAY",
    usage: "play",
    run: async(bot, msg, args, Discord, YouTube, ytdl, dotenv, TOKEN, PREFIX, GOOGLE_API_KEY, cooldown, youtube, queue, searchString, url, serverQueue, cmd) => { 

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
        await (video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
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
}
