module.exports = ({
    name: "warn",
    code: `
      $if[$getServerVar[language]==english]

$useChannel[$getServerVar[logc]]

    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
    $addTimestamp
$description[<:check:824627790275280946> **Warned** \`$userTag[$mentioned[1]]\` **in** <#$channelID>

**Reason:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`\`\`
[Jump to message\\](https://discord.com/channels/$guildID/$channelID/$messageID)]
$footer[Its their $getUserVar[warns;$mentioned[1]]st Warn]

$onlyIf[$mentioned[1]!=;]
$onlyIf[$getServerVar[logc]!=;]

$onlyPerms[kick;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$elseif[$getServerVar[language]==german]

$useChannel[$getServerVar[logc]]

    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $color[$getServerVar[embedcolor]]
    $addTimestamp
$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **Gewarnt**

**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Nicht Angegeben];false;$noMentionMessage]\`\`\`
[Springe zur Nachricht\\](https://discord.com/channels/$guildID/$channelID/$messageID)]
$footer[Das ist derren $getUserVar[warns;$mentioned[1]]. Warnung]

$onlyIf[$mentioned[1]!=;]
$onlyIf[$getServerVar[logc]!=;]

$onlyPerms[kick;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

         $endelseIf
$endif  `
    });