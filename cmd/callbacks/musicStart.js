const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
type: "musicStart",
channel: "$channelID",
  code: `
    $thumbnail[$songInfo[thumbnail]]
    $title[$songInfo[title];$songInfo[url]]
    $color[$getServerVar[embedcolor]]
    $author[Now Playing;$userAvatar[$songInfo[userID]]]
    $addField[Duration;$songInfo[duration];yes]
    $addField[Added by;<@$songInfo[userID]>;yes]
    $addField[Author;[$songInfo[publisher]\\]($songInfo[publisher_url]);yes]
    `
});