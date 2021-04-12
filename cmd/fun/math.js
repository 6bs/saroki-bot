const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "math",
    usage: "math (calculation)",
    desc: "Helps you with your math problems",
    code: `
\`$message\` equals \`$math[$message]\`
$onlyif[$message!=;<:wrong:786675235742679123> Wrong usage]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
    $suppressErrors[${error("There was an error trying to calculate \`$message\`")}]
        `
        });