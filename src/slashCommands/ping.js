module.exports = {
    slash: true,
    testOnly: true,
    description: "Simple ping pong command!",
    callback: async ({message, args, client, interaction}) => {
        return "pong!"
    }
}