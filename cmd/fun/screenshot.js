const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "screenshot",
    usage: "screenshot (url)",
    desc: "Screenshots a given url",
    code: `

    $if[$getServerVar[language]==english]

    $title[Screenshot]
    $color[$getServerVar[embedcolor]]
    $image[attachment://screenshot.jpg]
    $attachment[https://api.apiflash.com/v1/urltoimage?access_key=58e10b4174a241c9915b4e8fb77867c4&url=$message;screenshot.jpg]
    $footer[stay safe <3]
    $onlyIf[$message!=;${error("Wrong Usage: \`screenshot <link>\`")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

        $elseif[$getServerVar[language]==german]
    $title[Screenshot]
    $color[$getServerVar[embedcolor]]
    $image[attachment://screenshot.jpg]
    $attachment[https://api.apiflash.com/v1/urltoimage?access_key=58e10b4174a241c9915b4e8fb77867c4&url=$message;screenshot.jpg]
    $onlyIf[$message!=;${error("Benutze den command so: \`screenshot <link>\`")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
    $endelseif
    $endif

        `
        });