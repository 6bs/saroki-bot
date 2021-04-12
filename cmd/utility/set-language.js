const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "set-language",
code: `
$if[$message[1]==english]
$setServerVar[language;english]
<:check:824627790275280946> **Succesfully set the Language to** \`english\`
$onlyIf[$checkContains[$toLowercase[$message[1]];german;english]==true;${error("All valid languages are: \`german\`, \`english\`")}]
$onlyPerms[admin;${error("You need to be Admin for this command")}]

$elseIf[$message[1]==german]
$setServerVar[language;german]
<:check:824627790275280946> **Die Sprache wurde auf** \`german\` gesetzt
$onlyIf[$checkContains[$toLowercase[$message[1]];german;english]==true;${error("All valid languages are: \`german\`, \`english\`")}]
$onlyPerms[admin;${error("You need to be Admin for this command")}]
$endelseif
$endif

$onlyIf[$checkContains[$toLowercase[$message[1]];german;english]==true;${error("All valid languages are: \`german\`, \`english\`")}]
$onlyPerms[admin;${error("You need to be Admin for this command")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });