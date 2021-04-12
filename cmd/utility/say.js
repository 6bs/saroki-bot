const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "say",
usage: "say <message>",
code: `
$message
$onlyPerms[admin;${error("You need to be __Admin__")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });