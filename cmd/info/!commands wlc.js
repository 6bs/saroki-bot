module.exports = ({
name: "help-wlc",
code: `

$author[Developer: $userTag[478594278659063809];$userAvatar[478594278659063809]]

$color[$getServerVar[embedcolor]]
$title[➔ Welcome <:welcome:776488476950003813>;https://saroki.tk]
$description[**\`wlc-channel <channel>\` - Sets the Channel for Welcome messages
\`wlc-msg <message>\` - Sets the message
\`wlc-off\` - Turns off the Welcome system
\`wlc-on\` - Turns on the Welcome system
\`wlc-test\` - Tests the Welcome message**]

$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });