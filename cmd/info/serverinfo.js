module.exports = ({
    name: "serverinfo",
    desc: "Sends information about current server",
  aliases: ['si'],
    code: `

        $if[$getServerVar[language]==english]

    $color[$getServerVar[embedcolor]]
$author[$servername;$servericon]
$addField[<:sarokiowner:820289842801410068> Owner;\`\`\`$userTag[$ownerid]\`\`\`]
$addField[<:sarokiregion:820291011283648572> Region;\`\`\`$serverregion\`\`\`]
$addfield[<:sarokimembers:820290708518600735> Member;\`\`\`$memberscount\`\`\`]
$addField[<:sarokihash:820292500744831006> Channel;\`\`\`$channelcount\`\`\`]
$addField[<:sarokiroles:820284081111302154> Roles;\`\`\`$rolecount\`\`\`]
$thumbnail[$servericon]
$footer[ID: $guildID | Created at $creationdate[$guildID;date]]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]
    $color[$getServerVar[embedcolor]]
$author[$servername;$servericon]

$addField[<:sarokiowner:820289842801410068> Owner;\`\`\`$userTag[$ownerid]\`\`\`]
$addField[<:sarokiregion:820291011283648572> Region;\`\`\`$serverregion\`\`\`]
$addfield[<:sarokimembers:820290708518600735> Member;\`\`\`$memberscount\`\`\`]
$addField[<:sarokihash:820292500744831006> Kanäle;\`\`\`$channelcount\`\`\`]
$addField[<:sarokiroles:820284081111302154> Rollen;\`\`\`$rolecount\`\`\`]
$thumbnail[$servericon]
$footer[ID: $guildID | Erstellt am $creationdate[$guildID;date]]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseif
$endif

    `
    });