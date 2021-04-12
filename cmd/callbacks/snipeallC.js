const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
  type: "msgDelete",
channel: "$channelID",
 code: `
 $setChannelVar[allsnipe;$joinSplitText[§]§**Date:** \`$parseDate[$dateStamp;date]\`
 **By:** \`$userTag[$authorID]\`
 \`\`\`$message\`\`\`
 ]
 
 $removeTextSplitElement[$replaceText[$replaceText[$checkCondition[$getTextSplitLength>=10];true;1];false;$sum[1;$getTextSplitLength]]]
 $textSplit[$getChannelVar[allsnipe];§]
 $suppressErrors
 `
});