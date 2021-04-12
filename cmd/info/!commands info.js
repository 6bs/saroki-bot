module.exports = ({
name: "help-info",
code: `

$author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]

$color[$getServerVar[embedcolor]]
$title[➔ Info <:info:777154094476689418>;https://saroki.tk]
$description[**\`$commandInfo[avatar;name]\` - $commandInfo[avatar;desc]
\`$commandInfo[config;name]\` - $commandInfo[config;desc]
\`$commandInfo[invite;name]\` - $commandInfo[invite;desc]
\`$commandInfo[member;name]\` - $commandInfo[member;desc]
\`$commandInfo[ping;name]\` - $commandInfo[ping;desc]
\`$commandInfo[serverinfo;name]\` - $commandInfo[serverinfo;desc]
\`$commandInfo[stats;name]\` - $commandInfo[stats;desc]
\`$commandInfo[userinfo;name]\` - $commandInfo[userinfo;desc]
\`$commandInfo[vote;name]\` - $commandInfo[vote;desc]**]
$footer[Use "$getServerVar[prefix]help <command>" to get a Commands aliases, usage etc.]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });