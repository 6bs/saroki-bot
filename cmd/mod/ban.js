const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "ban",
    usage: "ban (mention) <reason>",
    desc: "Bans a member",
    code: `

    $if[$getServerVar[language]==english]

    $ban[$mentioned[1]]
    $wait[1s]
    $addTimestamp
    
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> **Banned** \`$userTag[$mentioned[1]]\`

**Reason:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`\`\`]

$onlyIf[$mentioned[1]!=;${error("You forgot to mention the user that you want to Ban")}]
$onlyPerms[ban;${error("You need __Ban__ Permission")}]
$suppressErrors[${error("Couldnt Ban User. Try giving me Administrator Permission or put my Role above the user that you want to Ban")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]
    $ban[$mentioned[1]]
    $wait[1s]
    $addTimestamp
    
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **Gebannt**

**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Nicht angegeben];false;$noMentionMessage]\`\`\`]

$onlyIf[$mentioned[1]!=;${error("Du hast vergessen dein User zu markieren")}]
$onlyPerms[ban;${error("Du brauchst __Ban__ Rechte")}]
$suppressErrors[${error("Der User konnte nicht Gebannt werden, Versuche mir Admin Rechte zu geben oder meine Rolle über die des Users zu schieben")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseIf
$endif

    `
    });