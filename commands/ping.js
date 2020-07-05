const { description } = require("./Basic/help");

module.exports = {
    name: 'ping',
    description: 'PIng',
    execute(msg, args){
        msg.channel.send('pong!');
    }
}