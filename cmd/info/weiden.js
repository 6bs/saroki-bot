const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");



module.exports = ({
name: "weiden",
code: `
$color[$getServerVar[embedcolor]]


$description[]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });