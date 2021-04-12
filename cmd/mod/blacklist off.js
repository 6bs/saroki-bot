module.exports = ({
name: "blacklist-off",
code: `
Successfully set \`$userTag[$message]\` Blacklist status to **off**
$setGlobalUserVar[blacklist;off;$message]
$onlyIf[$authorID==478594278659063809;]
    `
    });