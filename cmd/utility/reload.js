module.exports = {
name:"reload",
code:`
$djsEval[
 const {MessageEmbed} = require('discord.js')

 try {
 delete require.cache[require.resolve(process.cwd() +'/cmd/$replaceText[$message;-;/].js')\\]

 const key = client.bot_commands.findKey(c => c.name.toLowerCase() === '$splitText[$getTextSplitLength]'.toLowerCase())

 const pull = require(process.cwd() +'/cmd/$replaceText[$message;-;/].js')
 

 d.client.bot_commands.set(key, pull)
let embed = new MessageEmbed()
 .setTitle('Reload')
.setDescription('reloaded $splitText[$getTextSplitLength]')
.setThumbnail('$userAvatar[$clientID]')
.setColor('RANDOM')
d.message.channel.send(embed)
 
}
catch (e)
 {
 d.message.channel.send(e+'l')
 }
;no]
$textSplit[$message;-]
$onlyIf[$checkContains[$authorID;$botOwnerID[;]]==true;no u]
`
}