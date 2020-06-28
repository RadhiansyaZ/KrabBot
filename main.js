const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); //RegEx to prevent bugs
    const command = args.shift().toLowerCase();
        
    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'beep') {
        message.channel.send('Boop.');
    } else if (command === 'commands'){
        message.channel.send('This command currently unavailable, sorry :(');
    } else {
        message.channel.send('Command not found. Open list of commands with \\command');
    }

});

client.login(token);
