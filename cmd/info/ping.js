module.exports = ({
    name: "ping",
    desc: "Sends Sarokis ping",
    aliases: ['pong'],
    code: `
    $color[$getServerVar[embedcolor]]
    $title[Pong!]
    $description[Latency: \`$botPing\`
Client Ping: \`$ping\`]
$footer[stay safe <3]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });