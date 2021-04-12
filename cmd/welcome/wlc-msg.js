const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "wlc-msg",
code: `
<:check:786675235755786261> **Welcome message is set. Use** \`$getServerVar[prefix]wlc-test\` to test them!
$setservervar[wlcmsg;$message]
$onlyIf[$message!=;${error("Wrong Usage: \`$getServerVar[prefix]wlc-msg <message>\`\n\nVariables:\n(user.name) - $username\n(user.tag) - $userTag\n(user.mention) - <@$authorID>\n(user.creationDate) - the date this user's account was made\n(server.name) - the servers name\n(server.members) - the servers member count\n(embed) - places the message in a embed description")}]
$onlyperms[admin;${error("You need to be Admin")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });