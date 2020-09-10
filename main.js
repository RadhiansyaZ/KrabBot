const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs')

client.once('ready', () => {
    console.log('Ready!');
});

client.commands = new Discord.Collection(); // Storing command list available for the bot.
// TODO: fs read and filter the js file
// TODO: append to the Collection

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); //RegEx to prevent bugs
    const command = args.shift().toLowerCase();
        
    // if (command === 'ping') {
    //     message.channel.send('Pong!');
    // } else if (command === 'beep') {
    //     message.channel.send('Boop.');
    // } else if (command === 'commands'){
    //     message.channel.send('This command currently unavailable, sorry :(');
    // } else {
    //     message.channel.send('Command not found. Open list of commands with \\commands');
    // }

    if(!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        message.reply('There was an error while executing that command!');
    }
});

client.login(process.env.DISCORD_SECRET_TOKEN);
