/// 24/7 SERVER 
const canvacord = require("canvacord");
const fs = require('fs');
const Latenz = require('latenz');
const l = new Latenz();
const colors = require('colors');
const dbd = require("dbd.js");
var health = require('express-ping');
const express = require('express');
const app = express();
const latency = require('ms-latency')
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}




latency.start();
app.get('/', function (req, res) {
 res.json({status: 'on',
 uptime: millisToMinutesAndSeconds(latency.end())})
});


function keepAlive(){
 app.listen(3000, ()=>{console.log("Server is Ready!")});
};
module.exports = keepAlive;
keepAlive();

/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS BOT
/// DBD.JS Bot
const bot = new dbd.Bot({
  sharding: true,
  shardAmount: 2,
  fetchInvites: true,
  token: process.env['token'],
  prefix: ["$getServerVar[prefix]"]
});

bot.status({
  text: "saroki.tk | $serverCount Server",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "saroki.tk | $serverCount Server",
  type: "WATCHING",
  time: 12
})
bot.variables({
  wlcchannel: "",
  wlcmsg: "off",
  wlcstatus:"",
  antilink: "off",
  executed: "0",
  afk: "off",
  apikey: process.env['apikey'],
  allsnipe: "",
  afkmsg: "0",
  reason: "",
  snipe_msg: "",
  snipe_author: "",
  snipe_channel: "",
  snipe_date: "",
  snipe_attachment:"",
  editsnipe_msg: "",
  editsnipe_author: "",
  editsnipe_channel: "",
  editsnipe_date: "",
  editsnipe_attachment:"",  
  warns: "0",
  chatbotchannel: "",
  mutedrole: "",
  logc: "",
  embedcolor: "RANDOM",
  messages: "0",
  prefix: "s.",
  money: "0",
  bank: "0",
  blacklist: "off",
  suggestion: "",
  rebootc: "",
  currency: "<:flower:776554327740383232>",
  afk: "0",
  afkwhy: "",
  afktime: "",
  language: "english",
});
bot.onReactionAdd()
bot.onReactionRemove()
bot.onLeave()
bot.onJoined()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onBanAdd()
bot.onInviteCreate()
bot.onChannelDelete()
bot.onChannelUpdate()
bot.onChannelCreate()
bot.onInviteDelete()
bot.onRoleUpdate()
bot.onRoleDelete()
bot.onRoleCreate()
bot.onBanRemove()
bot.onMessage()
bot.onMessageUpdate()
bot.onPresenceUpdate()
bot.onUserUpdate()
bot.onMessageDelete()
bot.onInteractionCreate()



bot.interactionCommand({ //command
name: "echo", //name of the slash command
code: `$interactionReply[{color:$getServerVar[embedcolor]}
{title:Echo}
{description:$message}
{footer:$userTag[$authorID]:$userAvatar[$authorID]}]`
})
bot.onInteractionCreate()













// MENTIONED
// MENTIONED
// MENTIONED

bot.command({
  name: "<@786625849830670336>",
  code: `
$reply[$messageID;{color:$getServerVar[embedcolor]}{description:**Help:** \`$getServerVar[prefix]help\`
**Website:** *[saroki.tk\\](https://saroki.tk)*
**Uptime:** \`$uptime\`
**Prefix:** \`$getServerVar[prefix]\`}]

$onlyIf[$getGlobalUserVar[blacklist]==off;]
`,
  nonPrefixed: true
});

bot.command({
  name: "<@!786625849830670336>",
  code: `
$reply[$messageID;{color:$getServerVar[embedcolor]}{description:**Help:** \`$getServerVar[prefix]help\`
**Website:** *[saroki.tk\\](https://saroki.tk)*
**Uptime:** \`$uptime\`
**Prefix:** \`$getServerVar[prefix]\`}]


$onlyIf[$getGlobalUserVar[blacklist]==off;]

`,
  nonPrefixed: true
});

// HANDLER
// HANDLER
// HANDLER

console.log(`\n|Commands|\n`+
"|--------------------------------------------------|\n"+"| Name | Aliases | Type |");
const fork = fs.readdirSync('./cmd/')
for(const folder of fork){
 const fork = fs.readdirSync(`./cmd/${folder}`).filter(file => file.endsWith('.js'))
 for(const code of fork){
 const command = require(`./cmd/${folder}/${code}`)
 let cmd = {
 name: command.name,
 channel: command.channel,
 type: command.type,
 aliases: command.aliases,
 desc: command.desc,
 cat: command.cat,
 sub: command.sub,
 usage: command.usage,
 example: command.example,
 code:command.code 
 };
 //alle callbacks reinscheissen
 if(!cmd.type){
             console.warn(`type not found, setting it to dbd in ${cmd.name}`)
             bot.command(cmd)
             cmd.type = "dbd"            
            }
            else{
            if (cmd.type == 'dbd') {
                bot.command(cmd);
            }             
             else if (cmd.type == 'awaited') {
                bot.awaitedCommand(cmd);
            }        
             else if (cmd.type == 'update') {
                bot.updateCommand(cmd);
            } else if (cmd.type == 'delete') {
                bot.deletedCommand(cmd);
            } else if (cmd.type == 'join') {
                bot.joinCommand(cmd);
            } else if (cmd.type == 'leave') {
                bot.leaveCommand(cmd);
            } else if (cmd.type == 'ready') {
                bot.readyCommand(cmd);
            } else if (cmd.type == 'musicStart') {
                bot.musicStartCommand(cmd);
            } else if (cmd.type == 'timeout') {
                bot.timeoutCommand(cmd);
            } else if (cmd.type == 'musicEnd') {
                bot.musicEndCommand(cmd);
            } else if (cmd.type == 'guildJoin') {
                bot.botJoinCommand(cmd);
            } else if (cmd.type == 'roleDelete') {
                bot.roleDeleteCommand(cmd);
            } else if (cmd.type == 'roleCreate') {
                bot.roleCreateCommand(cmd);
            } else if (cmd.type == 'msgDelete') {
                bot.deletedCommand(cmd);
            } else if (cmd.type == 'msgUpdate') {
                bot.updateCommand(cmd);
            } else if (cmd.type == 'status') {
                bot.status(cmd);
            }
        
            }
 console.log(
 `|${code} | aliases:[${cmd.aliases}] | type:${cmd.type}|
|--------------------------------------------------|`
 );
 }} 
 console.clear()