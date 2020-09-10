module.exports = {
    name: 'beep',
    description: 'beep response',
    execute(message) {
        message.channel.send('Boop!')
    }
}