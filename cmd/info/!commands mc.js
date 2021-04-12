module.exports = ({
name: "help-mc",
code: `

$author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]

$color[$getServerVar[embedcolor]]
$title[➔ Minecraft <:mcpicke:804009610683220028>;https://saroki.tk]
$description[**\`$commandInfo[mcserver;name]\` - $commandInfo[mcserver;desc]
\`$commandInfo[mcskin;name]\` - $commandInfo[mcskin;desc]**]
$footer[Use "$getServerVar[prefix]help <command>" to get a Commands aliases, usage etc.]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });