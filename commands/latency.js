module.exports = {
    name: 'latency',
    description: 'Check latency between bot and user(s)',
    execute(message) {
        let timeStart = new Date();
        message.channel.send(`Network round trip between you and me is ${timeStart - message.createdTimestamp}ms`)
    }
}