const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "snipe",
    usage: "snipe <#channel / @user / all>",
code: `
$color[$getServerVar[embedcolor]]
$author[$userTag[$getUserVar[snipe_author;$mentioned[1;yes]]];$userAvatar[$getUserVar[snipe_author;$mentioned[1;yes]]]]
$addField[Attachment;$replaceText[$replaceText[$checkCondition[$getUserVar[snipe_attachment;$mentioned[1;yes]]==];true;\`No Attachment\`];false;$getUserVar[snipe_attachment;$mentioned[1;yes]]]]
$addField[Message;$replaceText[$replaceText[$checkCondition[$getUserVar[snipe_msg;$mentioned[1;yes]]==];true;None];false;$getUserVar[snipe_msg;$mentioned[1;yes]]]]
$footer[#$channelName[$getUserVar[snipe_channel;$mentioned[1;yes]]]]
$addTimestamp[$getUserVar[snipe_date;$mentioned[1;yes]]]
$onlyIf[$getUserVar[snipe_date;$mentioned[1;yes]]!=;${error("Theres nothing to snipe for <@$mentioned[1;yes]>")}]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$message[1]!=all;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });