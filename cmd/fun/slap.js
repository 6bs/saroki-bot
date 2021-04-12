const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "slap",
usage: "slap (mention)",
desc: "Lets you slap someone",
code: `
    $if[$getServerVar[language]==english]
$footer[stay safe <3]
$description[**$username** *slaps* **$username[$mentioned[1]]**]
$image[attachment://slap.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/slap;url];slap.gif]

$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Wrong usage: \`$getServerVar[prefix]slap @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;outch- why would you do that :c]
$onlyIf[$mentioned[1]!=478594278659063809;you cant slap my developer :c meanie.]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]
$description[**$username** *schlägt* **$username[$mentioned[1]]**]
$image[attachment://slap.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/slap;url];slap.gif]

$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Benutze den command so: \`$getServerVar[prefix]slap @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;du arschi]
$onlyIf[$mentioned[1]!=478594278659063809;SCHLAG NICHT JANNIK DU PENNER]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

$endelseif
$endif

    `
    });