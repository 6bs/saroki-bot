module.exports = ({
name: "member",
desc: "Sends current servers Member Count",
code: `
$color[$getServerVar[embedcolor]]
$title[Member Count]
$footer[$serverName;$serverIcon]
$description[$membersCount Member!]


$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });