const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
  name: "command",
  code: `
$sendMessage[{color: $getServerVar[embedcolor]} {title: $jsonRequest[https://dbdjs.leref.ga/functions/$getObjectProperty[search];name;]}{description: \`\`\`
$jsonRequest[https://dbdjs.leref.ga/functions/$getObjectProperty[search];description;]\`\`\`
$replaceText[$replaceText[$checkCondition[$getObjectProperty[usage]==];true;];false;**Usage:**\n$getObjectProperty[usage]]};no]
$addObjectProperty[usage;\`\`\`$jsonRequest[https://dbdjs.leref.ga/functions/$getObjectProperty[search];usage;]\`\`\`]
$onlyIf[$jsonRequest[https://dbdjs.leref.ga/functions/$getObjectProperty[search];message;]!=function not found;❌ Function not found!]
$onlyIf[$jsonRequest[https://dbdjs.leref.ga/functions/$getObjectProperty[search];message;]!=Too many requests!;❌ Too many request passed to the api!]
$createObject[{"search": "$replaceText[$message[1];#RIGHT#;]"}]
$onlyIf[$message[1]!=;${error("You need to enter the function name!")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

`});