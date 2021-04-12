module.exports = ({
name: "help-utility",
code: `

$author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]

$color[$getServerVar[embedcolor]]
$title[➔ Utility <:databasepog:776500633666584626>;https://saroki.tk]
$description[**\`bug <bug>\` - Reports a problem with Saroki
\`afk <reason>\` - Puts you and AFK mode
\`say <message>\` - Returns your message
\`set-log <channel>\` - Sets the log channel
\`set-mutedrole <role>\` - Sets mutedrole
\`set-prefix <new prefix>\` - Sets server prefix
\`snipe\` - Shows the last deleted message in the current channel
\`snipeall\` - Does what u expect .-.
\`suggest <suggestion>\` - Sends your suggestion in the set channel
\`set-suggestion <channel>\` - Sets server suggestion channel
\`add-emoji <emoji>\` - Adds the given emoji to the Server
\`quote <**]


$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });