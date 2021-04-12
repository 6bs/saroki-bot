const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "skip",
desc: "Skips the current song",
aliases: ['s'],
code: `
$skipSong
<:check:824627790275280946> **Skipped** \`$songInfo[title]\`
$onlyIf[$voiceid[$clientID]==$voiceID[$authorID];${error("Im being used in \`$channelName[$voiceid[$clientid]]\`")}]
$onlyIf[$voiceId[$clientID]!=;${error("Try using \`play\` first...")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });