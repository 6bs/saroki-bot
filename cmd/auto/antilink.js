module.exports = ({
name: "$alwaysExecute",
code: `
$deletecommand
$onlyIf[$checkContains[$message;discord.gg/]==true;]
$onlyIf[$hasPerms[$authorID;admin]==false;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$onlyIf[$getServerVar[antilink]==on;]
    `
    });