const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "wlc-channel",
    code: `
    <:check:786675235755786261> **Welcome Channel got set to** <#$mentionedChannels[1]>
    $setServerVar[wlcchannel;$mentionedChannels[1]]
    $onlyIf[$mentionedChannels[1]!=;${error("You forgot to mention a Channel")}]
    $onlyPerms[admin;${error("You need to be Admin")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });