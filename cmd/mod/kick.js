const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "kick",
    usage: "kick (mention) <reason>",
  desc: "Kicks a user",
    code: `
    $if[$getServerVar[language]==english]

$addTimestamp
    $kick[$mentioned[1]]
    $wait[1s]
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> **Kicked** \`$userTag[$mentioned[1]]\`

**Reason:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`\`\`]

$onlyIf[$mentioned[1]!=;${error("You forgot to mention the user that you want to Kick")}]
$onlyPerms[kick;${error("You need __Kick__ Permission")}]
$suppressErrors[${error("Couldnt Kick User. Try giving me Administrator Permission or put my Role above the user that you want to Kick")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
  $elseif[$getServerVar[language]==german]


$addTimestamp
    $kick[$mentioned[1]]
    $wait[1s]
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **Gekickt**

**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Nicht Angegeben];false;$noMentionMessage]\`\`\`]

$onlyIf[$mentioned[1]!=;${error("Du hast vergessen den User zu erwähnen den du Kicken willst")}]
$onlyPerms[kick;${error("Du brauchst __Kick__ Rechte")}]
$suppressErrors[${error("Der User konnte nicht Gekickt werden, Versuche mir Admin Rechte zu geben oder meine Rolle über die des Users zu schieben")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseIf
$endif
    `
    });