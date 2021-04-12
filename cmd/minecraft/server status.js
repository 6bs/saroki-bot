const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "mcserver",
usage: "mcserver (server ip)",

code: `
$author[Status of $message]
$addField[Players;\`$numberSeparator[$jsonRequest[https://mcapi.xdefcon.com/server/$message/players/json;players;No ip was given]]\` / \`$numberSeparator[$jsonRequest[https://mcapi.xdefcon.com/server/$message/maxplayers/json;maxplayers;No ip was given]]\`]
$addField[Version;\`$jsonRequest[https://mcapi.xdefcon.com/server/$message/version/json;version;No ip was given]\`]
$addField[Server Status;\`$replaceText[$replaceText[$checkCondition[$jsonRequest[https://mcapi.xdefcon.com/server/$message/status/json;online;No ip was given]==true];true;Online;1];false;Offline;1]\`]
$color[$replaceText[$replaceText[$checkCondition[$jsonRequest[https://mcapi.xdefcon.com/server/$message/status/json;online;No ip was given]==true];true;GREEN;1];false;RED;1]]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$suppressErrors[${error("Error")}]
    `
    });