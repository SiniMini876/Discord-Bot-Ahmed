module.exports = async (Discord, client, reaction, user) => {
    let applyRole = async () => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        try {
        if(role && member){
          console.log("Role and Member are found.");
          await member.roles.add(role);
          console.log('The member has given the role "Member".');
          }
        } catch(err){
          console.log(err);
        }
      }
      if(reaction.message.partial){
        try{
        var msg = await reaction.message.fetch();
        if(msg.id === '730381895132643328'){
          applyRole();
        }
      }catch(err) {
        console.log(err);
        }
      }else{
        if(reaction.message.id === '730381895132643328'){
          applyRole();
        }
      }
}