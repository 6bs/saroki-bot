module.exports = ({
name: "help-music",
code: `
$author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]
$color[$getServerVar[embedcolor]]
$title[➔ Music <a:voice:787042359485136946>;https://saroki.tk]
$description[**\`$commandInfo[bass;name]\` - $commandInfo[bass;desc]
\`$commandInfo[jumpto;name]\` - $commandInfo[jumpto;desc]
\`$commandInfo[leave;name]\` - $commandInfo[leave;desc]
\`$commandInfo[nowplaying;name]\` - $commandInfo[nowplaying;desc]
\`$commandInfo[play;name]\` - $commandInfo[play;desc]
\`$commandInfo[queue;name]\` - $commandInfo[queue;desc]
\`$commandInfo[skip;name]\` - $commandInfo[skip;desc]**]

$footer[Use "$getServerVar[prefix]help <command>" to get a Commands aliases, usage etc.]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });