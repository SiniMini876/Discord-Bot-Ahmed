module.exports = {
    name: "ping",
    category: "info",
    description: "Get bot ping :/",
    usage: "ping",
    run: (bot, message) => {
      message.channel.send(`**Pong** ${bot.ws.ping}`);
    }
  }