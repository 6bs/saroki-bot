const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
type: "roleDelete",
channel: "$randomChannelID", 
  code: `$useChannel[$getServerVar[logc]]
  $color[$getServerVar[embedcolor]]

  $description[<:minus:810589753195495444> **Role Deleted**]
  $addField[Role Name;\`\`\`$oldRole[name]\`\`\`;no]
  $addTimestamp
  $onlyIf[$channelExists[$getServerVar[logc]]==true;]
  $onlyIf[$getServerVar[logc]!=;]
  $suppressErrors`
  })