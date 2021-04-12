const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "warn",
    usage: "warn (mention) <reason>",
    desc: "Warns a user",
    code: `
  $if[$getServerVar[language]==english]

$addTimestamp
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
    
$description[<:check:824627790275280946> **Warned** \`$userTag[$mentioned[1]]\`

**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`\`\`]
$footer[Its their $getUserVar[warns;$mentioned[1]]st Warn]
$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$mentioned[1]!=;${error("You forgot to mention the user that you want to Warn")}]
$onlyPerms[kick;${error("You need __Kick__ Permission")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$elseif[$getServerVar[language]==english]
$addTimestamp
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
    
$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **Gewarnt**

**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Nicht Angegeben];false;$noMentionMessage]\`\`\`]
$footer[Das ist derren $getUserVar[warns;$mentioned[1]]. Warnung]
$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$mentioned[1]!=;${error("Du hast vergessen den User zu erwähnen den du Kicken willst")}]
$onlyPerms[kick;${error("Du brauchst __Kick__ Rechte")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

       $endelseIf
$endif`
    });