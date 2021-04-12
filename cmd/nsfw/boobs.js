const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
    name: "boobs",
    desc: "Sends boobies",
    code: `
    $color[$getServerVar[embedcolor]]
    $description[<@$authorID>, here are some BOOBIES]
    $image[attachment://boobs.gif]
    $attachment[$jsonRequest[https://www.nekos.life/api/v2/img/boobs;url];boobs.gif]
    $onlyNSFW[${error("You can only use this command in NSFW channels")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
        `
        });