const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "snipe",
    usage: "snipe <#channel / @user / all>",
code: `
$color[$getServerVar[embedcolor]]
$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
$addField[Attachment;$replaceText[$replaceText[$checkCondition[$getChannelVar[snipe_attachment;$mentionedChannels[1;yes]]==];true;\`No Attachment\`];false;$getChannelVar[snipe_attachment;$mentionedChannels[1;yes]]]]
$addField[Message;$replaceText[$replaceText[$checkCondition[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]==];true;None];false;$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]]
$footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]]]
$addTimestamp[$getChannelVar[snipe_date;$mentionedChannels[1;yes]]]
$onlyIf[$getChannelVar[snipe_date;$mentionedChannels[1;yes]]!=;${error("Theres nothing to snipe in <#$mentionedChannels[1;yes]>")}]
$onlyIf[$mentioned[1]==;]
$onlyIf[$message[1]!=all;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });