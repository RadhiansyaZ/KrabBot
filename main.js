const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

client.once('ready', () => {
    console.log('Ready!');
});

client.commands = new Discord.Collection(); // Storing command list available for the bot.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));  
// Array with string of <command>.js

for (let file of commandFiles) { // Creating Collection of Command.
    let command = require(`./commands/${file}`)
    client.commands.set(command.name, command)

}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); //RegEx to prevent bugs
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) {
        message.reply('Command not found.');
        return;
    }
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        message.reply('There was an error while executing that command!');
    }
});

client.login(process.env.DISCORD_SECRET_TOKEN);
