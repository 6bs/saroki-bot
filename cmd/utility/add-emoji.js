const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name:"add-emoji",
usage: "add-emoji (emoji)",
desc: "Adds the given emoji to the current server",
code:`
<:check:824627790275280946> **Emoji $addEmoji[https://cdn.discordapp.com/emojis/$findNumbers[$message[1]];$message[2];yes] with name \`$message[2]\` got added to the Server**
$suppressErrors[${error("Failed Adding the emoji")}]
$onlyIf[$charCount[$message[2]]>=2;${error("Your emoji name must be longer than two characters")}]
$onlyIf[$findNumbers[$message[1]]!=;;${error("Not a valid emoji")}]
$onlyIf[$message[2]!=;${error("Please provide a name for the emoji")}]
$onlyIf[$message[1]!=;${error("Please Provide a emoji to add")}]
$onlyPerms[manageemojis;${error("You need \`manageemojis\` permissions")}]`})