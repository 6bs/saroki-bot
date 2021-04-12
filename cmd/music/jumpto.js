const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
usage: "jumpto (queue position)",
desc: "Jumps to a given queue position",
name: "jumpto",
code: `
$movesong[$sum[$message[1];1];1]
<:check:824627790275280946> **Jumped to** \`$message[1]\`
$onlyif[$isNumber[$message[1]]==true;${error("This Position does not exist")}]
$onlyIf[$message[1]<$queueLength;${error("This Position does not exist")}]
$onlyIf[$voiceid[$clientID]==$voiceID[$authorID];${error("Im being used in \`$channelName[$voiceid[$clientid]]\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });