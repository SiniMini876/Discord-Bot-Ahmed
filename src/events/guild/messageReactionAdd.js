module.exports = async (Discord, client, reaction, user) => {
    let applyRole = async () => {
        let emojiName = reaction.emoji.name;
        if (reaction.message.guild.id === '693864294911049829') {
            // buganim
            let role = reaction.message.guild.roles.cache.find(
                (role) => role.name.toLowerCase() === emojiName.toLowerCase()
            );
            let member = reaction.message.guild.members.cache.find(
                (member) => member.id === user.id
            );

            try {
                if (role && member) {
                    console.log('Role and Member are found. -- BUGANIM');
                    await member.roles.add(role);
                    console.log(
                        'The member has given the role "Member". -- BUGANIM'
                    );
                }
            } catch (err) {
                console.log(err);
            }
        }
        if (reaction.message.guild.id === '805361587103203378') {
            // Almo
            let role = reaction.message.guild.roles.cache.find(
                (role) => role.id === '805364807427162132'
            );
            let member = reaction.message.guild.members.cache.find(
                (member) => member.id === user.id
            );

            try {
                if (role && member) {
                    console.log('Role and Member are found. -- ALMO');
                    await member.roles.add(role);
                    console.log(
                        'The member has given the role "Member". -- ALMO'
                    );
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    if (reaction.message.partial) {
        try {
            var msg = await reaction.message.fetch();
            if (msg.id === '730381895132643328') {
                //buganim
                applyRole();
            }
            if (msg.id === '819698938658553906') {
                // Almo
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '730381895132643328') {
            //buganim
            applyRole();
        }
        if (reaction.message.id === '819698938658553906') {
            // Almo
            applyRole();
        }
    }
};
