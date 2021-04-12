module.exports = ({
    name: "userinfo",
    desc: "Sends information about specific user",
    usage: "userinfo <mention / user id / name>",
  aliases: ['ui', 'user'],
    code: `
        $if[$getServerVar[language]==english]

    $color[$getServerVar[embedcolor]]
    $thumbnail[$userAvatar[$findMember[$message]]]
    $author[$usertag[$findMember[$message]];$userAvatar[$findMember[$message]];$replaceText[$userAvatar[$findMember[$message];2048];.webp;.png]]

    $addField[<:sarokiroles:820284081111302154> Roles;$replaceText[$replaceText[$checkCondition[$userRoles[$findMember[$message];mentions]==];true;None];false;$userRoles[$findMember[$message];mentions]]]
$addField[<:sarokijoin:820291747593846814> Join Date;\`\`\`$memberJoinedDate[$findMember[$message];date]\`\`\`;no]
$addField[<:sarokijoin:820291747593846814> Creation Date;\`\`\`$creationDate[$findMember[$message];date]\`\`\`;no]
$addField[<:sarokiuser:820281339915403295> ID;\`\`\`$findMember[$message]\`\`\`;no]
$addField[<:sarokiat:820282065328406558> User;<@$findMember[$message]>;yes]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

        $elseif[$getServerVar[language]==german]

    $color[$getServerVar[embedcolor]]
    $thumbnail[$userAvatar[$findMember[$message]]]
    $author[$usertag[$findMember[$message]];$userAvatar[$findMember[$message]];$replaceText[$userAvatar[$findMember[$message];2048];.webp;.png]]
        

    $addField[<:sarokiroles:820284081111302154> Rollen;$replaceText[$replaceText[$checkCondition[$userRoles[$findMember[$message];mentions]==];true;Keine];false;$userRoles[$findMember[$message];mentions]]]
$addField[<:sarokijoin:820291747593846814> Join Datum;\`\`\`$memberJoinedDate[$findMember[$message];date]\`\`\`;no]
$addField[<:sarokijoin:820291747593846814> Erstellungs Datum;\`\`\`$creationDate[$findMember[$message];date]\`\`\`;no]
$addField[<:sarokiuser:820281339915403295> ID;\`\`\`$findMember[$message]\`\`\`;no]
$addField[<:sarokiat:820282065328406558> User;<@$findMember[$message]>;no]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseif
$endif
    `
    });