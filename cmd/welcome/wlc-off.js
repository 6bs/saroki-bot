const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "wlc-off",
code: `
$setServerVar[wlcstatus;off]
<:check:786675235755786261> **Welcome Messages are turned** \`off\`**!**
$onlyPerms[admin;${error("You need to be Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });