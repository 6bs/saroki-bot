const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "checkwarns",
    usage: "checkwarns (mention)",
    desc: "Lets you check a users warns",
  aliases: ['warns', 'cwarns'],
    code: `

    $if[$getServerVar[language]==english]

    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:786675235755786261> \`$userTag[$mentioned[1]]\` **got** \`$getUserVar[warns;$mentioned[1]]\` **Warns**]

$onlyIf[$mentioned[1]!=;${error("You forgot to mention the user you want to know the Warns of")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    $elseif[$getServerVar[language]==german]
    
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:786675235755786261> \`$userTag[$mentioned[1]]\` **hat** \`$getUserVar[warns;$mentioned[1]]\` **Warnungen**]

$onlyIf[$mentioned[1]!=;${error("Du hast vergessen den User zu erwähnen von dem du die Warnungen herrausfinden willst")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseIf
$endif
    `
    });