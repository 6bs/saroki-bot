module.exports = ({
name: "topwarns",
aliases: ['tw'],
desc: "Returns a \"leaderboard\" of all warned users",
code: `
$color[$getServerVar[embedcolor]]
$title[Top warns]
$description[\`\`\`$userLeaderboard[warns;asc;{top} | {username} - {value}]\`\`\`]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });