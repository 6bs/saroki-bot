const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "leave",
desc: "Leaves the Voice channel and stops the music",
aliases: ['stop'],
code: `
$stopSong
<:check:824627790275280946> **Left the Voice Channel and Stoped playing Music**
$onlyIf[$voiceid[$clientID]==$voiceID[$authorID];${error("Im being used in \`$channelName[$voiceid[$clientid]]\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });