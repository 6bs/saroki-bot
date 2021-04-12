module.exports = ({
name: "blacklist-on",
code: `
Successfully set \`$userTag[$message]\` Blacklist status to **on**
$setGlobalUserVar[blacklist;on;$message]
$onlyIf[$authorID==478594278659063809;]
    `
    });