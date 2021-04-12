const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "antiinvite-off",
desc: "Turns off the anti invite system",
code: `

    $if[$getServerVar[language]==english]

<:check:824627790275280946> **Anti-Link is now** \`off\`
$setServerVar[antilink;off]
$onlyPerms[admin;${error("You need to be Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]
<:check:824627790275280946> **Anti-Link ist jetzt** \`aus\`
$setServerVar[antilink;off]
$onlyPerms[admin;${error("Dafür musst du Admin sein")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseIf
$endif
    `
    });