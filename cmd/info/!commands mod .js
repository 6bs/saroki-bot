module.exports = ({
name: "help-mod",
code: `

$author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]

$color[$getServerVar[embedcolor]]
$title[➔ Moderation <:mod:776806560713277450>;https://saroki.tk]
$description[**\`$commandInfo[antilink-off;name]\` - $commandInfo[antilink-off;desc]
\`$commandInfo[antilink-on;name]\` - $commandInfo[antilink-on;desc]
\`$commandInfo[ban;name]\` - $commandInfo[ban;desc]
\`$commandInfo[checkwarns;name]\` - $commandInfo[checkwarns;desc]
\`$commandInfo[kick;name]\` - $commandInfo[kick;desc]
\`$commandInfo[mute;name]\` - $commandInfo[mute;desc]
\`$commandInfo[purge;name]\` - $commandInfo[purge;desc]
\`$commandInfo[removewarn;name]\` - $commandInfo[removewarn;desc]
\`$commandInfo[tempmute;name]\` - $commandInfo[tempmute;desc]
\`$commandInfo[topwarns;name]\` - $commandInfo[topwarns;desc]
\`$commandInfo[unban;name]\` - $commandInfo[unban;desc]
\`$commandInfo[unmute;name]\` - $commandInfo[unmute;desc]
\`$commandInfo[warn;name]\` - $commandInfo[warn;desc]**]
$footer[Use "$getServerVar[prefix]help <command>" to get a Commands aliases, usage etc.]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });