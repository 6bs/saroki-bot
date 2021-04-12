const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "kiss",
usage: "kiss (mention)",
desc: "Lets you kiss someone",
code: `
$if[$getServerVar[language]==english]
$footer[stay safe <3]
$description[**$username** *kisses* **$username[$mentioned[1]]**]
$image[attachment://kiss.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/kiss;url];kiss.gif]
$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Wrong usage: \`$getServerVar[prefix]kiss @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;ow- im blushing uwu <3 ily :3]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

$elseif[$getServerVar[language]==german]
$description[**$username** *küsst* **$username[$mentioned[1]]**]
$image[attachment://kiss.gif]
$attachment[$jsonRequest[https://nekos.life/api/v2/img/kiss;url];kiss.gif]
$color[$getServerVar[embedcolor]]
$onlyIf[$mentioned[1]!=;${error("Benutze den command so: \`$getServerVar[prefix]kiss @user\`")}]
$onlyIf[$mentioned[1]!=$clientID;naw du cutie :3 ily <3]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseif
$endif

    `
    });