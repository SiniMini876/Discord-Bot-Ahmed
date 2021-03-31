module.exports = {
    slash: true,
    description: "אחמד אומר את מה שאתה רוצה",
    minArgs: 1,
    testOnly: true,
    expectedArgs: '<msg>',
    callback: async ({message, args, client, interaction}) => {
        let [msg] = args
        return msg
    }
}