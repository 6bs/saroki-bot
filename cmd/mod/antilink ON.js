const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "antiinvite-on",
desc: "Turns on the anti invite system",

code: `

    $if[$getServerVar[language]==english]

<:check:824627790275280946> **Anti-Link is now** \`on\`
$setServerVar[antilink;on]
$onlyPerms[admin;${error("You need to be Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]
<:check:824627790275280946> **Anti-Link ist jetzt** \`an\`
$setServerVar[antilink;on]
$onlyPerms[admin;${error("Dafür musst du Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseIf
$endif
    `
    });