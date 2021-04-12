module.exports = ({
    name: "ban",
    code: `

        $if[$getServerVar[language]==english]

    $addTimestamp
    $useChannel[$getServerVar[logc]]
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> **Banned** \`$userTag[$mentioned[1]]\` **in** <#$channelID>

**Reason:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`\`\`
[Jump to message\\](https://discord.com/channels/$guildID/$channelID/$messageID)]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$getServerVar[logc]!=;]

$onlyPerms[ban;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]
    $addTimestamp
    $useChannel[$getServerVar[logc]]
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **wurde in** <#$channelID> **Gebannt**

**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Nicht angegeben];false;$noMentionMessage]\`\`\`
[Springe zur Nachricht\\](https://discord.com/channels/$guildID/$channelID/$messageID)]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$getServerVar[logc]!=;]

$onlyPerms[ban;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseIf
$endif
    `
    });