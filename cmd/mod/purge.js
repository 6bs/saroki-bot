const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "purge",
usage: "purge (number)",
desc: "Purges the chat!",
  aliases: ['clear'],
code: `

  $if[$getServerVar[language]==english]
$deleteCommand
<:check:824627790275280946> **Deleted** \`$noMentionMessage\` **Messages in** <#$channelID>
$clear[$noMentionMessage]
$onlyIf[$noMentionMessage<101;${error("Number cant be __over__ 100")}]
$onlyIf[$isNumber[$noMentionMessage]==true;${error("Argument is not a number")}]
$onlyIf[$noMentionMessage!=;${error("Wrong usage: \`$getGlobalUserVar[prefix]purge <number>\`")}]
$onlyPerms[managemessages;${error("You need __manage messages__ permissions")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

  $elseif[$getServerVar[language]==german]
$deleteCommand
<:check:824627790275280946> \`$noMentionMessage\` **Nachrichten in** <#$channelID> **Gelöscht**
$clear[$noMentionMessage]
$onlyIf[$noMentionMessage<101;${error("Anzahl kann nicht über __100__ sein")}]
$onlyIf[$isNumber[$noMentionMessage]==true;${error("Das ist keine Zahl!")}]
$onlyIf[$noMentionMessage!=;${error("Benutze den command so: \`$getGlobalUserVar[prefix]purge <number>\`")}]
$onlyPerms[managemessages;${error("Du brauchst __Nachrichten verwalten__ Rechte!")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

$endelseIf
$endif
    `
    });