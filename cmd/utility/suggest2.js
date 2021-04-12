const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "suggest",
code: `
<:check:824627790275280946> Suggestion sent in <#$getServerVar[suggestion]>
$onlyIf[$message!=;]
$onlyIf[$channelExists[$getServerVar[suggestion]]==true;]
$onlyIf[$getServerVar[suggestion]!=;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });