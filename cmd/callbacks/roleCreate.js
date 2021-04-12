const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
  type: "roleCreate",
channel: "$randomChannelID", 
  code: `$useChannel[$getServerVar[logc]]
  $color[$getServerVar[embedcolor]]

  $description[<:plus:810589026352234496> **New Role Created**]
  $addField[Role ID;\`\`\`$roleid[$newRole[name]]\`\`\`;no]

    $addTimestamp
  $onlyIf[$channelExists[$getServerVar[logc]]==true;]
  $onlyIf[$getServerVar[logc]!=;]
  $suppressErrors`
  })