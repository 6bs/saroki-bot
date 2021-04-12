module.exports = ({
name: "stats",
desc: "Sends Sarokis stats",
code: `
    $if[$getServerVar[language]==english]

$color[$getServerVar[embedcolor]]
$thumbnail[$userAvatar[$clientID]]
$title[Bot stats]

$addField[Others;Commands: \`$commandsCount\`
Servers: \`$servercount\`
All Users: \`$allmemberscount\`
Ping: \`$ping\`
Developer: \`$userTag[$botOwnerID]\`]




$addField[Versions;NodeJS: [$getObjectProperty[nodev]\\](https://nodejs.org/en/)
Discord.js: [$getObjectProperty[discordv]\\](https://www.npmjs.com/package/discord.js)
DBD.js: [$packageVersion\\](https://www.npmjs.com/package/dbd.js)]





$addField[Hosting Related;CPU Usage: \`$cpu\`
CPU Platform: \`$djsEval[require ('os').platform();yes]\`
CPU Model: \`$djsEval[require ('os').cpus()[0\\].model;yes]\`
Memory Usage: \`$djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB\`
RAM Usage: \`$roundTenth[$ram;2] MB\`]





$djseval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version
$createObject[{}]]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]

$color[$getServerVar[embedcolor]]
$thumbnail[$userAvatar[$clientID]]
$title[Bot stats]

$addField[Others;Commands: \`$commandsCount\`
Server: \`$servercount\`
Alle User: \`$allmemberscount\`
Ping: \`$ping\`
Developer: \`$userTag[$botOwnerID]\`]




$addField[Versionen;NodeJS: [$getObjectProperty[nodev]\\](https://nodejs.org/en/)
Discord.js: [$getObjectProperty[discordv]\\](https://www.npmjs.com/package/discord.js)
DBD.js: [$packageVersion\\](https://www.npmjs.com/package/dbd.js)]





$addField[Hosting;CPU Usage: \`$cpu\`
CPU Platform: \`$djsEval[require ('os').platform();yes]\`
CPU Model: \`$djsEval[require ('os').cpus()[0\\].model;yes]\`
Memory Usage: \`$djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB\`
RAM Usage: \`$roundTenth[$ram;2] MB\`]





$djseval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version
$createObject[{}]]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseif
$endif
    `
    });