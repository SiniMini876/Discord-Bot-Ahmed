module.exports = {
  name: "rules",
  aliases: [""],
  cooldown: 5,
  description: "The bot sends the thing in the welcome page - ADMINS ONLY",
  adminonly: true,
  async execute(bot, msg, args){ 
    msg.channel.send("**כדי להצטרף לשרת אנא הישבע אמונים לצ'ינגאצ'וג על ידי לחיצה על האימוג'י המפחיד שמתחת להודעה.**");
    msg.delete({ timeout: 5000 }).catch(console.error);
  }
}