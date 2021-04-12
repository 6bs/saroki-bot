const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "afk",
desc: "Sets your afk status to true",
usage: "afk <reason>",
code: `

$color[$getServerVar[embedcolor]]
$author[$userTag;$authorAvatar]
$description[<:check:786675235755786261> **I set your AFK to:**
$message]
$changeNickname[$authorID;(AFK) $nickname[$authorID]]
$setUserVar[afktime;$dateStamp;$authorID]
$setUserVar[afk;1;$authorID]
$setUserVar[afkwhy;$message;$authorID]
$onlyIf[$message!=;${error("Wrong Usage: \`$getServerVar[prefix]afk <reason>\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$suppressErrors
    `
    });