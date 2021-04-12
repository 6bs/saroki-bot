module.exports = ({
name: "file",
usage: "file <file name>",
code: `
\`\`\`js
const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
      name: \"$commandInfo[$message;name]\",
      usage: \"$commandInfo[$message;usage]\",
      aliases: \"$commandInfo[$message;aliases]\",
      code: \`$commandInfo[$message;code]\`
})
\`\`\`
$onlyIf[$authorID==478594278659063809;]
    `
    });