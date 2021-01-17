const Discord = require("discord.js");
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 5,
  description: "The bot sends an help page, like this one.",
  async execute(bot, msg, args, ms, mc){ 
      const helpembed = new Discord.MessageEmbed()
      .setColor("#7289DA")
      .setDescription(
      `
__**Commands List**__
    
**חשוב מאוד להבהיר, כל פקודה מתחילה ב-!**

**פקודות לחדרים זמניים**

> \`!cr [מגבלת אנשים בחדר]\` = יצירת חדר זמני
> \`!cd\` = מחיקת חדר זמני, אתה חייב להיות מחובר לחדר כדי לבצע את הפקודה הזאת. 

**פקודות לסקרים**

> \`!poll\` = וואלק תכתוב poll ואז את השאלה שאתה רוצה לשאול
    
**פקודות לפריקינג מוזיקה בחדרים**
    
> **\`!play [title/url]\`**
> **\`!search [title]\`**
> \`!skip = יעביר לך שיר\`
> \`!stop = יעצור לך את הפריקינג דבר המחורבן הזה\`
> \`!pause = זה כי אני מניאק ואני רוצה שרק תשהה את השיר\`
> \`!resume = זה כי אתה מפגר שרוצה להמשיך עם הזוואות של המוזיקה הישראלית\`
> \`!nowplaying = זה כי אני מגניב שרוצה להראות לך את השיר שמנוגן\`
> \`!queue = זה כי אני מגניב שמראה לך את השירים שבתור\`
> \`!volume = זה כי אני מתחשב בזה שהשיר אולי יחריש לך את האוזניים\``
      )
      .setFooter(
        "©️ SiniMini876",
      );
      msg.author.send(helpembed);
      msg.delete({ timeout: 5000 }).catch(console.error);
    }
}