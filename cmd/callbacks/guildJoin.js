const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
type: "guildJoin",
channel: "787848782909800449",
  code: `$dm[$botOwnerID]
  $color[$getServerVar[embedcolor;706495636006109244]]
  $author[$userTag[$ownerID[$guildID[$serverName]]];$userAvatar[$ownerID[$guildID[$serverName]]]]
  $addfield[Server Name;$serverName[$guildID[$serverName]];yes]
  $addfield[Invite;$getServerInvite[$guildID[$serverName]]]`
})