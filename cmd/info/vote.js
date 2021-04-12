module.exports = ({
name: "vote",
desc: "Sends link to vote for Saroki",
code: `
https://top.gg/bot/786625849830670336
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });