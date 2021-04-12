module.exports = ({
    name: "help-NSFW",
    aliases: ['help-nsfw'],
    code: `
    
    $author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]
    
$color[$getServerVar[embedcolor]]
$title[➔ NSFW :underage:;https://saroki.tk]
$description[**\`$commandInfo[blowjob;name]\` - $commandInfo[boobs;desc]
\`$commandInfo[cum;name]\` - $commandInfo[cum;desc]
\`$commandInfo[hentai;name]\` - $commandInfo[hentai;desc]**]
$footer[Use "$getServerVar[prefix]help <command>" to get a Commands aliases, usage etc.]
$onlyNSFW[<:wrong:786675235742679123> You can only use this command in NSFW channels]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
        `
        });