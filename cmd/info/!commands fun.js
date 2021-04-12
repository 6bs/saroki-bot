module.exports = ({
name: "help-fun",
code: `

$author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]

$color[$getServerVar[embedcolor]]
$title[➔ Fun <a:Pepe_Pew_Pew:796365835823742977>;https://saroki.tk]
$description[**\`$commandInfo[bear;name]\` - $commandInfo[bear;desc]
\`$commandInfo[cat;name]\` - $commandInfo[cat;desc]
\`$commandInfo[channel;name]\` - $commandInfo[channel;desc]
\`$commandInfo[cuddle;name]\` - $commandInfo[cuddle;desc]
\`$commandInfo[dog;name]\` - $commandInfo[dog;desc]
\`$commandInfo[geoip;name]\` - $commandInfo[geoip;desc]
\`$commandInfo[hug;name]\` - $commandInfo[hug;desc]
\`$commandInfo[kiss;name]\` - $commandInfo[kiss;desc]
\`$commandInfo[math;name]\` - $commandInfo[math;desc]
\`$commandInfo[meme;name]\` - $commandInfo[meme;desc]
\`$commandInfo[panda;name]\` - $commandInfo[panda;desc]
\`$commandInfo[screenshot;name]\` - $commandInfo[screenshot;desc]
\`$commandInfo[slap;name]\` - $commandInfo[slap;desc]
\`$commandInfo[translate;name]\` - $commandInfo[translate;desc]
\`$commandInfo[weather;name]\` - $commandInfo[weather;desc]**]
$footer[Use "$getServerVar[prefix]help <command>" to get a Commands aliases, usage etc.]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });