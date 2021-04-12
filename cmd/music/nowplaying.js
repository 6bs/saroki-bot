const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "nowplaying",
desc: "Sends information about the song that is playing at the moment",
aliases: ['np'],
code: `
    $thumbnail[$songInfo[thumbnail]]
    $title[$songInfo[title];$songInfo[url]]
    $color[$getServerVar[embedcolor]]
    $author[Now Playing;$userAvatar[$songInfo[userID]]]
    $addField[Duration;$songInfo[duration] **$songInfo[duration_left] left**;yes]
    $addField[Added by;<@$songInfo[userID]>;yes]
    $addField[Author;[$songInfo[publisher]\\]($songInfo[publisher_url]);yes]

    $onlyIf[$songInfo[userID]!=;${error("Theres nothing playing")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });