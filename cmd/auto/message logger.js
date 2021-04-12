module.exports = ({

name: "$alwaysExecute",
code: `
$sendWebhook[818620706584526920;VQ-No5cXHzw5m0uBR5H8jZR_EgOKnPrgpnMPQkLMef7PN5dGDz9wdEKHwEQ8oidQrg-H;{color:$getServerVar[embedcolor]}
{author:$usertag:$authoravatar}
{description:\`$userTag[$authorID]\` **ran** *\`$replaceText[$message[1];$getServerVar[prefix];]\`* ($botpingms)}
{footer:$servername[$guildID] | $guildID}]

$onlyIf[$commandInfo[$replaceText[$message[1];$getServerVar[prefix;$guildid];];name]!=;]
$onlyIf[$message[1]==$getServerVar[prefix]$filterMessage[$message[1];$getServerVar[prefix]];]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$suppressErrors
    `
    });