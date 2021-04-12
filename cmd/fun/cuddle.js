const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");

module.exports = ({
name: "cuddle",
usage: "cuddle <mention>",
desc: "Lets you cuddle someone",

code: `

$if[$getServerVar[language]==english]
$footer[stay safe <3]
$description[**$username** *cuddles* **$username[$mentioned[1]]**]
$image[attachment://cuddle.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/cuddle;url];cuddle.gif]

$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Wrong usage: \`$getServerVar[prefix]cuddle @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;ow- im blushing uwu <3 ily :3]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

$elseIf[$getServerVar[language]==german]
$description[**$username** *kuschelt sich an* **$username[$mentioned[1]]**]
$image[attachment://cuddle.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/cuddle;url];cuddle.gif]

$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Benutze den Command so: \`$getServerVar[prefix]cuddle @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;naw du cutie :3 ily <3]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

$endelseIf
$endif

    `
    });