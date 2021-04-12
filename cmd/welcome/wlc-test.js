const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "wlc-test",
code: `
$if[$checkContains[$getServerVar[wlcmsg];(embed)]==true]

$useChannel[$getservervar[wlcchannel]]
$channelsendmessage[$channelid;<:check:786675235755786261> **Message is sent in** <#$getservervar[wlcchannel]>]
$color[$getServerVar[embedcolor]]
$description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServervar[wlcmsg];(user.tag);$usertag[$authorID]];(user.mention);<@$authorID>];(user.name);$username[$authorID]];(server.members);$membersCount];(server.name);$serverName];(user.creationDate);$creationDate[$authorID;date]];(embed);]]


$onlyIf[$getservervar[wlcstatus]==on;${error("Welcome system is off")}]
$onlyIf[$getservervar[wlcchannel]!=;${error("Welcome Channel is not set")}]
$onlyIf[$getservervar[wlcmsg]!=;${error("Welcome Message is not set")}]
$onlyPerms[admin;${error("You need to be Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]










$elseif[$checkContains[$getServerVar[wlcmsg];(embed)]==false]

$useChannel[$getservervar[wlcchannel]]
$channelsendmessage[$channelid;<:check:786675235755786261> **Message is sent in** <#$getservervar[wlcchannel]>]
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServervar[wlcmsg];(user.tag);$usertag[$authorID]];(user.mention);<@$authorID>];(user.name);$username[$authorID]];(server.members);$membersCount];(server.name);$serverName];(user.creationDate);$creationDate[$authorID;date]]


$onlyIf[$getservervar[wlcstatus]==on;${error("Welcome system is off")}]
$onlyIf[$getservervar[wlcchannel]!=;${error("Welcome Channel is not set")}]
$onlyIf[$getservervar[wlcmsg]!=;${error("Welcome Message is not set")}]
$onlyPerms[admin;${error("You need to be Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseif
$endif
    `
    });