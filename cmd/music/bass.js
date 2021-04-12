const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "bass",
usage: "bass (0-20)",
desc: "Applies a bass filter",
code: `
<:check:824627790275280946> **Bass Boost filter is now set to value** \`$message[1]\`

$songFilter[bass:$message[1]]
$onlyIf[$message[1]<21;${error("Bass Boost cannot be higher than \`20\`")}]
$onlyIf[$message[1]>-1;${error("Bass Boost cannot be lower than \`0\`")}]
    $onlyIf[$isNumber[$message[1]]==true;${error("Wrong Usage: \`bass <0-20>\`")}]
    $argsCheck[>1;${error("Wrong Usage: \`bass <0-20>\`")}]
    $onlyIf[$voiceid[$clientID]==$voiceID[$authorID];${error("Im being used in \`$channelName[$voiceid[$clientid]]\`")}]
    $onlyIf[$voiceId[$clientID]!=;${error("Try using \`play\` first...")}]

$onlyIf[$jsonRequest[https://top.gg/api/bots/$clientID/check?userId=$authorID;voted;:x: Error while getting request;Authorization:$getVar[apikey]]==1;${error("You need to vote in order to use this Command (\`$getServerVar[prefix]vote\`)")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });