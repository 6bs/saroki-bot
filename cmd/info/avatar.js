module.exports = ({
    name: "avatar",
    usage: "avatar <mention>",
    desc: "Gets a users avatar",
    aliases: ['av'],
    code: `
    $author[$userTag[$findUser[$message]];$userAvatar[$findUser[$message]];$replaceText[$userAvatar[$findUser[$message];2048];.webp;.png]]
    $color[$getServerVar[embedcolor]]
    $image[$replaceText[$userAvatar[$findUser[$message];2048];.webp;.png]]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });