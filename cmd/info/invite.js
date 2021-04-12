module.exports = ({
    name: "invite",
    desc: "Sends invite link of Saroki",
    code: `
    $getBotInvite
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });