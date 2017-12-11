const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'terminate') {
    msg.reply("I'm afraid I can't do that...");
  }
  if (msg.content === '|mindblown|') {
    msg.reply("http://www.reactiongifs.com/r/2013/10/tim-and-eric-mind-blown.gif");
  }
});

client.login('MzY0NDk3NjMzMjY1NDUxMDA5.DLq8TA.TqrKeAXCjDu9VojMAX3n-Z1-5k8')
