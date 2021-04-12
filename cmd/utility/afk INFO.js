const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "$alwaysExecute",
code: `
$color[$getServerVar[embedcolor]]
$description[\`$userTag[$mentioned[1]]\` **is AFK:**
$getUserVar[afkwhy;$mentioned[1]]]
$footer[Set at]
$addTimestamp[$getUserVar[afktime;$mentioned[1]]]
$onlyIf[$getUserVar[afk;$mentioned[1]]>=1;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$suppressErrors
    `
    });