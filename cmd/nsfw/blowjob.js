const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "blowjob",
    desc: "Blow someone",
    aliases: ['bj'],
    usage: "blowjob <mention>",
    code: `
    $color[$getServerVar[embedcolor]]
    $description[**$username** *sucks* **$username[$mentioned[1]]**]
    $image[attachment://blowjob.jpg]
    $attachment[$jsonRequest[https://www.nekos.life/api/v2/img/blowjob;url];blowjob.jpg]
    $onlyIf[$mentioned[1]!=;${error("Wrong usage: \`$getServerVar[prefix]blowjob @user\`")}]
    $onlyNSFW[${error("You can only use this command in NSFW channels")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
        `
        });