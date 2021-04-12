const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "queue",
aliases: ['q'],
desc: "Sends the current queue",
code: `
$color[$getServerVar[embedcolor]]
$title[Queue :page_with_curl:]
$description[There are $queueLength Song(s) in the Queue]
$addField[Now Playing;$songInfo[title], added by <@$songInfo[userID]>]
$addField[Songs;$queue[1;10;\`{number}\` - **{title}**, added by <@{userID}>]]

$onlyIf[$queueLength>1;${error("The Queue is empty")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });