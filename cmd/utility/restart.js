module.exports = ({
name: "restart",
code: `
$reboot[index.js]
$addCmdReactions[<:check:786675235755786261>]
$onlyIf[$authorID==$botOwnerID;]
    `
    });