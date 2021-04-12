const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "play",
usage: "play <song name / link>",
desc: "Joins your Voice channel and plays music",
aliases: ['p'],
code: `
$If[$checkContains[$message;open.spotify.com/playlist]==false]
:inbox_tray: **Found** \`$playSong[$message;5s;yes;no;<:wrong:786675235742679123> Failed playing this Song (youtube)]\` **and added it to the Queue!**
$sendMessage[:mag_right: **Searching...** \`$message\`;no]
$onlyIf[$message!=;${error("Wrong Usage: \`$getServerVar[prefix]play <song name / link>\`")}]
$onlyIf[$voiceID[$authorid]==$voiceID[$clientID];${error("Im being used in \`#$channelName[$voiceID[$clientID]]\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$onlyIf[$voiceID[$clientID]!=;]

$elseIf[$checkContains[$message;open.spotify.com/playlist]==true]
:inbox_tray: **Found** \`$playSpotify[$message;number;yes;<:wrong:786675235742679123> Failed playing this Playlist (spotify)]\` **Songs and added them to the Queue!**
$sendMessage[:mag_right: **Searching...** \`$message\`;no]
$onlyIf[$message!=;${error("Wrong Usage: \`$getServerVar[prefix]play <song name / link>\`")}]
$onlyIf[$voiceID[$authorid]==$voiceID[$clientID];${error("Im being used in \`#$channelName[$voiceID[$clientID]]\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$onlyIf[$voiceID[$clientID]!=;]
$endelseif
$endif
    `
    });