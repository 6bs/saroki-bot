const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "set-prefix",
usage: "set-prefix <new prefix>",
code: `
      $setServerVar[prefix;$message]
      
<:check:824627790275280946> **Changed server prefix to** \`$message\`
      $argsCheck[>1;${error("Wrong ussage: \`$getServerVar[prefix]set-prefix <new prefix>\`")}]
      $onlyPerms[admin;${error("You need to be Admin")}]
      $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });