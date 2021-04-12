const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
type: "msgDelete",
channel: "$channelID",
  code: `
  $useChannel[$getServerVar[logc]]
  $color[$getServerVar[embedcolor]]
  $author[$userTag[$authorID];$userAvatar[$authorID]]
  $description[:wastebasket: **Message deleted in** <#$channelid>
  \`\`\`$replaceText[$message;\`;]\`\`\`]
  $addTimestamp
$onlyIf[$channelExists[$getServerVar[logc]]==true;]
$onlyIf[$getServerVar[logc]!=;]
$suppressErrors
  `
});