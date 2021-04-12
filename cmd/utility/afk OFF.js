const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "$alwaysExecute",
code: `

$setUserVar[afk;0;$authorID]
$setUserVar[afkwhy;;$authorID]
$color[$getServerVar[embedcolor]]
$author[$userTag;$authorAvatar]
$description[<@$authorid>, **I have removed your AFK Status**]
$changeNickname[$authorID;$replaceText[$nickname[$authorID];(AFK);]]
$onlyIf[$getUserVar[afk;$authorID]>=1;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$suppressErrors
    `
    });