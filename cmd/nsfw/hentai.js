const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
    name: "hentai",
    desc: "Random Hentai gif",
    code: `
    $color[$getServerVar[embedcolor]]
    $description[<@$authorid>, here is a random hentai]
    $image[attachment://hentai.gif]
    $attachment[$jsonRequest[https://www.nekos.life/api/v2/img/Random_hentai_gif;url];hentai.gif]
    
    $onlyNSFW[${error("You can only use this command in NSFW channels")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
        `
        });