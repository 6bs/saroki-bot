const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "unban",
    usage: "unban (userID)",
    desc: "Unbans a user",
    code: `

      $if[$getServerVar[language]==english]

    $unban[$message[1]]
    $color[$getServerVar[embedcolor]]
$author[$usertag[$authorID];$useravatar[$authorID]]
$description[<:check:824627790275280946> **Unbanned** \`$usertag[$message[1]]\`
\`\`\`$replaceText[$replaceText[$checkCondition[$replaceText[$message;$message[1];]==];true;Unspecified];false;$replaceText[$message;$message[1];]]\`\`\`]

    $onlyif[$isbanned[$message[1]]==true;${error("\`$usertag[$message[1]]\` is not Banned")}]
    $onlyIf[$findUser[$message[1]]!=$authorid;${error("Wrong Usage: \`unban <userID>\`")}]
    $onlyPerms[ban;${error("You need __Ban__ Permission")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

      $elseif[$getServerVar[language]==german]

$unban[$message[1]]
    $color[$getServerVar[embedcolor]]
$author[$usertag[$authorID];$useravatar[$authorID]]
$description[<:check:824627790275280946> \`$usertag[$message[1]]\` **Entbannt**
\`\`\`$replaceText[$replaceText[$checkCondition[$replaceText[$message;$message[1];]==];true;Nicht Gesetzt];false;$replaceText[$message;$message[1];]]\`\`\`]

    $onlyif[$isbanned[$message[1]]==true;${error("\`$usertag[$message[1]]\` ist nicht Gebannt!")}]
    $onlyIf[$findUser[$message[1]]!=$authorid;${error("Benutze den command so: \`unban <userID>\`")}]
    $onlyPerms[ban;${error("Du brauchst __Ban__ Rechte")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    $endelseIf
$endif
        `
        });