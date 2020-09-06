const Discord = require("discord.js");
const { Client, Util, MessageEmbed, MessageAttachment, MessageMentions, Collection } = require("discord.js");
const mongoose = require('mongoose');
const Report = require('../Settings/report.js');

module.exports = class report {
    constructor(){
        this.name = "report",
        this.alias = ["r"],
        this.usage = "!report"
    }
        async run(bot, msg, args){
            if (msg.deletable) msg.delete();
            await mongoose.connect('mongodb://84.94.189.234/Reports', {
                useNewUrlParser: true,
                useUnifiedTopology: true
              });
            let rMember = msg.mentions.members.first() || msg.guild.members.get(args[0]);

            if (!rMember)
                return msg.reply("Couldn't find that person?").then(m => m.delete(5000));

            if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
                return msg.channel.send("Can't report that member").then(m => m.delete(5000));

            if (!args[1])
                return msg.channel.send("Please provide a reason for the report").then(m => m.delete(5000));
            let rreason = args.slice(1).join(" ")
            const channel = msg.guild.channels.find(c => c.name === "reports")

            if (!channel)
                return msg.channel.send("Couldn't find a `#reports` channel").then(m => m.delete(5000));

            const embed = new Discord.MessageEmbed()
                .setDescription('**Reports**')
                .setColor("#RANDOM")
                .setFooter(msg.guild.name, msg.guild.iconURL)
                .setAuthor("Reported member", rMember.user.displayAvatarURL)
                .setDescription(`**- Member:** ${rMember} (${rMember.user.id})
                **- Reported by:** ${msg.member}
                **- Reported in:** ${msg.channel}
                **- Reason:** ${rreason}
                **- Time:** ${msg.createdAt}`);

                channel.send(embed);


            const report = new Report({
                _id: mongoose.Types.ObjectId(),
                username: rMember.user.username,
                userID: rMember.id,
                reason: rreason,
                reportedBy: msg.author.username,
                reportedByID: msg.author.id,
                time: msg.createdAt

            });

            report.save()
            .then(result => console.log(result))
            .catch(err => console.log(err));
            msg.reply("check");


           }   
        
    }