const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
  type: "msgUpdate",
  channel: "$channelID",
  code: `
        $useChannel[$getServerVar[logc]]
        $color[$getServerVar[embedcolor]]
        $author[$userTag[$authorID];$userAvatar[$authorID]]
$description[:pencil2: **Message edited in** <#$channelUsed>]
$addField[New;\`\`\`$message\`\`\`
[Jump to message\\](https://discord.com/channels/$guildID/$channelID/$messageID);no]
$addField[Old;\`\`\`$oldMessage\`\`\`;no]
$addTimestamp
$onlyIf[$channelExists[$getServerVar[logc]]==true;]
$onlyIf[$getServerVar[logc]!=;]
$suppressErrors
        `
});