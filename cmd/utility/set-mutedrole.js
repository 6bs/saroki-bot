const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "set-mutedrole",
    usage: "set-mutedrole <role>",
    aliases: ['set mutedrole'],
    code: `
<:check:824627790275280946> **Muted Role got set to** <@&$mentionedRoles[1]>
    $setServerVar[mutedrole;$mentionedRoles[1]]
    $onlyIf[$mentionedRoles[1]!=;${error("You forgot to __mention__ the Role")}]
    $onlyPerms[admin;${error("You need to be Admin")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });