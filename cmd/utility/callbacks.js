const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "callbacks",
code: `
$color[$getServerVar[embedcolor]]
$description[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$jsonRequest[https://dbdjs.leref.ga/callbacks/];[;];\\];];";];,;];  ;];on;bot.on]]


$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });