module.exports = class rules{
  constructor(){
    this.name = 'rules',
    this.alias = ['rules'],
    this.usage = '!rules'
  }
    run(bot, msg, args){ 
    msg.channel.send("**כדי להצטרף לשרת אנא הישבע אמונים לצ'ינגאצ'וג על ידי לחיצה על האימוג'י המפחיד שמתחת להודעה.**");
    msg.delete({ timeout: 5000 }).catch(console.error);
  }
}