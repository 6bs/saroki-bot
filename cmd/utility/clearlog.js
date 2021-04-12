const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "clearlog",
code: `
cleared the console
$djsEval[console.clear();]
  $onlyIf[$authorID==478594278659063809;<:wrong:786675235742679123> **This Command is only for the Developers. :)**]

$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });