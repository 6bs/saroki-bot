const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
    name: "snipe",
    usage: "snipe <#channel / @user / all>",
    code: `
    $author[$channelname[$mentionedchannels[1;yes]];$servericon]
    $description[$replaceText[$joinSplitText[
    ];\`;]]
    $addTimestamp
    $color[$getServerVar[embedcolor]]
    $onlyIf[$splitText[$getTextSplitLength]!=;${error("Theres nothing to snipe in <#$mentionedChannels[1;yes]>")}]
    $textSplit[$getChannelVar[allsnipe;$mentionedChannels[1;yes]];§]
    $onlyif[$message[1]==all;]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
});