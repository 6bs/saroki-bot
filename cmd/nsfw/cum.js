const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "cum",
    desc: "Cum.",
    code: `
    $color[$getServerVar[embedcolor]]
    $description[<@$authorID>, cummy cummy on ur facy facy]
    $image[attachment://cum.gif]
    $attachment[$jsonRequest[https://www.nekos.life/api/v2/img/cum;url];cum.gif]
    $onlyNSFW[${error("You can only use this command in NSFW channels")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
        `
        });