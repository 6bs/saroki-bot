const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "mute",
    usage: "mute (mention) <reason>",
    code: `

      $if[$getServerVar[language]==english]

    $addTimestamp
    $giveRoles[$mentioned[1];$getServerVar[mutedrole]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> **Muted** \`$userTag[$mentioned[1]]\`

**Reason:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`\`\`]
    $onlyIf[$mentioned[1]!=;${error("You forgot to mention the user that you want to Mute")}]
    $onlyIf[$getServerVar[mutedrole]!=;${error("Muted Role is not set")}]
    $onlyPerms[kick;${error("Missing __Kick__ Permission")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]


  $elseif[$getServerVar[language]==german]
    $addTimestamp
    $giveRoles[$mentioned[1];$getServerVar[mutedrole]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **Gestummt**

**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Nicht Angegeben];false;$noMentionMessage]\`\`\`]
$onlyIf[$mentioned[1]!=;${error("Du hast vergessen den User zu erwähnen den du Stummen willst")}]
    $onlyIf[$getServerVar[mutedrole]!=;${error("Die Rolle zum stummen wurde nicht gesetzt")}]
    $onlyPerms[kick;${error("Du brauchst __Kick__ Rechte")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

$endelseIf
$endif
    `
    });