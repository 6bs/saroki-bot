const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "mcskin",
usage: "mcskin (java name)",
code: `
$color[$getServerVar[embedcolor]]

$author[$message Skin;https://mc-heads.net/head/$message]
$image[https://mc-heads.net/body/$message]
$description[[Download\\](https://minotar.net/skin/$message)]
$onlyIf[$message!=;${error("Missing JAVA account name")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });