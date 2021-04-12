const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "wlc-on",
code: `
$setServerVar[wlcstatus;on]
<:check:786675235755786261> **Welcome Messages are turned** \`on\`**!**
$onlyPerms[admin;${error("You need to be Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });