const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "channel",
usage: "channel (youtube name)",

aliases: ['youtube'],
code: `
$color[$getServerVar[embedcolor]]
$title[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;name;Error];$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;url;Error]]
$description[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;description;Error]]
$thumbnail[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;logo;Error]]
$addfield[Videos;\`\`\`$numberSeparator[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;statistics.videoCount;Error]]\`\`\`]
$addfield[Views;\`\`\`$numberSeparator[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;statistics.viewCount;Error]]\`\`\`]
$addfield[Subscriber;\`\`\`$numberSeparator[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;statistics.subscriberCount;Error]]\`\`\`]
$addfield[Creation Date;\`\`\`$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;dateCreated;Error]\`\`\`;yes]













$onlyIf[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;url]!=;${error("Couldnt find channel \`$message\`")}]
$onlyIf[$message!=;${error("Wrong usage: \`$getServerVar[prefix]channel <youtube channel>")}]
$addCmdReactions[<a:loading:776478620507570226>]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$globalCooldown[30s;${error("Please wait \`%time%\` to avoid being rate limited!")}]
    `
    });
