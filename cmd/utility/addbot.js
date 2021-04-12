const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "add",
usage: "ONLY IN 320 SERVER | add <botid> <prefix>",
code: `$channelSendMessage[782198987465424916;<@$botownerid> {description: **$userTag[$authorID]** hat \`$userTag[$message[1]]\` mit dem Prefix \`$message[2]\` eingesendet!
[Invite\\](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0)}
{color: $getServerVar[embedcolor]}]
$color[$getServerVar[embedcolor]]
$title[Add Bot]
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[Du hast erfolgreich \`$userTag[$message[1]]\` mit dem Prefix \`$message[2]\` eingesendet!]

$onlyIf[$isBot[$message[1]]==true;<:wrong:786675235742679123> Das ist kein Bot!]
$onlyIf[$message[1]!=;<:wrong:786675235742679123> Benutze den Command so: \`$getServerVar[prefix]add <bot id> <prefix>\`]
$onlyIf[$message[2]!=;<:wrong:786675235742679123> Benutze den Command so: \`$getServerVar[prefix]add <bot id> <prefix>\`]
$onlyIf[$channelID==781996575340625930;<:wrong:786675235742679123> Benutze diesen Command in <#781996575340625930>]
$onlyIf[$guildID==706495636006109244;]
$suppressErrors[<:wrong:786675235742679123> Das ist kein Bot!]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });