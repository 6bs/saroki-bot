const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "removewarn",
    usage: "removewarn (mention)",
  desc: "Removes a warn of a user",
  aliases: ['rwarn'],
    code: `

  $if[$getServerVar[language]==english]

    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
    $setUserVar[warns;$sub[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
$description[<:check:824627790275280946> **Removed one warn from** \`$userTag[$mentioned[1]]\`]

$onlyIf[$mentioned[1]!=;${error("You forgot to mention the user that you want to remove a Warn of")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
  $elseif[$getServerVar[language]==german]

$author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
    $setUserVar[warns;$sub[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
$description[<:check:824627790275280946> **Eine Warnung von** \`$userTag[$mentioned[1]]\` **Gelöscht**]

$onlyIf[$mentioned[1]!=;${error("Du hast vergessen den User zu erwähnen")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

$endelseIf
$endif
    `
    });