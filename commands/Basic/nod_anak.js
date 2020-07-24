const Discord = require("discord.js");
const { Client, Util, MessageEmbed, MessageAttachment } = require("discord.js");
const { response } = require("express");

module.exports = {
    name: 'help',
    description: "Get some help",
    run: (bot, mc, msg, args) => { 
        setInterval(() => {
            mc('play.hypixel.net', 25565, (error, response) => {
                if(error) throw error
                console.log(response)
                const nodem = new Discord.MessageEmbed()
                .setTitle('__**שיט על השרת**__')
                .addField('הIP של השרת', response.host)
                .addField('גרסת המיינקראפט של השרת', response.version)
                .addField('מספר אנשים מחוברים', response.onlinePlayers)
                .setThumbnail('https://cdn.discordapp.com/attachments/725621195214684220/732626581620785206/coollogo_com-213421466.png')
                msg.channel.send(nodem);
            })
        }, 5000);
    }
}