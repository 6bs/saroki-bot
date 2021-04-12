const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "bug",
usage: "bug (the bug)",
desc: "Report a bug to the developer",
code: `
$dm[478594278659063809]
$color[$getServerVar[embedcolor]]
$title[Bug Report]
$addField[Sent in;[$serverName[$guildID]\\]($getServerInvite[$guildID]);no]
$addField[Bug;$message;no]
$author[$userTag[$authorID];$userAvatar[$authorID]]
$onlyIf[$message!=;${error("Wrong usage: \`bug <the bug you want to report\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });