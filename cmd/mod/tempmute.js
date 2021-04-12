const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "tempmute",
    usage: "tempmute (mention) (time) <reason>",
    desc: "Tempmutes a user",
    code: `
      $if[$getServerVar[language]==english]

$description[<:check:824627790275280946> **Muted** \`$userTag[$mentioned[1]]\`

**Duration:**
\`\`\`$message[2]\`\`\`
**Reason:**
\`\`\`$replaceText[$replaceText[$checkCondition[$message[3]==];true;Unspecified];false;$replaceText[$replaceText[$message;$message[1];];$message[2];]]\`\`\`]
$color[$getServerVar[embedcolor]]
$setTimeout[$message[2];
user:$mentioned[1]
command:tempmute]
$giveRoles[$mentioned[1];$getServerVar[mutedrole]]

          $onlyIf[$message[2]!=;${error("Missing duration")}]
            $onlyIf[$mentioned[1]!=;${error("You forgot to mention the user that you want to Mute")}]
               $onlyIf[$getServerVar[mutedrole]!=;${error("Muted Role is not set")}]
                  $onlyPerms[kick;${error("Missing __Kick__ Permission")}]
                  $onlyIf[$getGlobalUserVar[blacklist]==off;]
                  $suppressErrors[${error("Invalid time format.\n\n**Try using these Examples:**\n5s - 5 Seconds\n5m - 5 Minutes\n5h- 5 Hours")}]

  $elseif[$getServerVar[language]==german]

$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **Gestummt**

**Länge:**
\`\`\`$message[2]\`\`\`
**Grund:**
\`\`\`$replaceText[$replaceText[$checkCondition[$message[3]==];true;Nicht Angegeben];false;$replaceText[$replaceText[$message;$message[1];];$message[2];]]\`\`\`]
$color[$getServerVar[embedcolor]]
$setTimeout[$message[2];
user:$mentioned[1]
command:tempmute]
$giveRoles[$mentioned[1];$getServerVar[mutedrole]]

          $onlyIf[$message[2]!=;${error("Die länge des Mutes fehlt!")}]
            $onlyIf[$mentioned[1]!=;${error("Du hast vergessen den User zu erwähnen")}]
               $onlyIf[$getServerVar[mutedrole]!=;${error("Die Gestummt Rolle ist nicht gesetzt")}]
                  $onlyPerms[kick;${error("Du brauchst __Kick__ Rechte")}]
                  $onlyIf[$getGlobalUserVar[blacklist]==off;]
                  $suppressErrors[${error("Invalid time format.\n\n**Try using these Examples:**\n5s - 5 Seconds\n5m - 5 Minutes\n5h- 5 Hours")}]

$endelseIf
$endif
    `
    });