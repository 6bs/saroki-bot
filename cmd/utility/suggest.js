const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "suggest",
usage: "suggest <suggestion>",
code: `
$useChannel[$getServerVar[suggestion]]
$addCmdReactions[✅]
$addReactions[⬆;⬇;❌]
$thumbnail[$serverIcon]
$color[$getServerVar[embedcolor]]
$title[Suggestion]
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[$message]
$footer[⬆ - Like it | ⬇ Dont like it | ❌ Hate it]
$onlyIf[$message!=;${error("Wrong usage: \`$getServerVar[prefix]suggest <suggestion>\`")}]
$onlyIf[$channelExists[$getServerVar[suggestion]]==true;${error("Couldnt find a channel with id \`$getServerVar[suggestion]\`")}]
$onlyIf[$getServerVar[suggestion]!=;${error("Suggestion Channel is not set!")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });