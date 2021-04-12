const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "set-suggestion",
    usage: "set-suggestion <channel>",
    code: `
<:check:824627790275280946> **Suggestion Channel got set to** <#$mentionedChannels[1]>
    $setServerVar[suggestion;$mentionedChannels[1]]
    $onlyIf[$mentionedChannels[1]!=;${error("You forgot to mention a Channel :o")}]
    $onlyPerms[admin;${error("You need to be Admin :3")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });