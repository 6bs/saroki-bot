const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "hug",
usage: "hug (mention)",
desc: "Lets you Hug someone",
code: `

$if[$getServervar[language]==english]
$footer[stay safe <3]
$description[**$username** *hugs* **$username[$mentioned[1]]**]
$image[attachment://hug.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/hug;url];hug.gif]
$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Wrong usage: \`$getServerVar[prefix]hug @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;ow- im blushing uwu <3 ily :3]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

$elseIf[$getServervar[language]==german]
$description[**$username** *umarmt* **$username[$mentioned[1]]**]
$image[attachment://hug.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/hug;url];hug.gif]
$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Benutze den command so: \`$getServerVar[prefix]hug @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;naw du cutie :3 ily <3]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseif
$endif


    `
    });