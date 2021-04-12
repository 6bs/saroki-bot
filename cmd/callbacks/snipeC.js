const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
type: "msgDelete",
channel: "$channelID",
  code: `
  $if[$messageAttachment==]
  $setChannelVar[snipe_msg;$replaceText[$message;\`;]]
  $setChannelVar[snipe_author;$authorID]
  $setChannelVar[snipe_attachment;]
  $setChannelVar[snipe_channel;$channelID]
  $setChannelVar[snipe_date;$dateStamp]

  $setUserVar[snipe_msg;$replaceText[$message;\`;];$authorID]
  $setUserVar[snipe_author;$authorID;$authorID]
  $setUserVar[snipe_attachment;;$authorID]
  $setUserVar[snipe_channel;$channelID;$authorID]
  $setUserVar[snipe_date;$dateStamp;$authorID]


  $elseIf[$messageAttachment!=]
  $setChannelVar[snipe_msg;$replaceText[$message;\`;]]
  $setChannelVar[snipe_attachment;$replaceText[$replaceText[$messageAttachment;cdn;media];.com;.net]]
  $setChannelVar[snipe_author;$authorID]
  $setChannelVar[snipe_channel;$channelID]
  $setChannelVar[snipe_date;$dateStamp]

  $setUserVar[snipe_msg;$replaceText[$message;\`;];$authorID]
  $setUserVar[snipe_attachment;$replaceText[$replaceText[$messageAttachment;cdn;media];.com;.net];$authorID]
  $setUserVar[snipe_author;$authorID;$authorID]
  $setUserVar[snipe_channel;$channelID;$authorID]
  $setUserVar[snipe_date;$dateStamp;$authorID]
  $endelseIf
  $endIf
  $suppressErrors
  `
});