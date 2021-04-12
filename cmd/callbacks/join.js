module.exports = ({ 
  type: "join",
        channel: "$getServervar[wlcchannel]",
        code: `
        $if[$checkContains[$getServerVar[wlcmsg];(embed)]==true]
        $color[$getServerVar[embedcolor]]
$description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServervar[wlcmsg];(user.tag);$usertag[$authorID]];(user.mention);<@$authorID>];(user.name);$username[$authorID]];(server.members);$membersCount];(server.name);$serverName];(user.creationDate);$creationDate[$authorID;date]];(embed);]]

        $onlyIf[$channelExists[$getServerVar[wlcchannel]]==true;]
        $onlyIf[$getservervar[wlcstatus]==on;]
        $suppressErrors
        
        $elseif[$checkContains[$getServerVar[wlcmsg];(embed)]==false]
        $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServervar[wlcmsg];(user.tag);$usertag[$authorID]];(user.mention);<@$authorID>];(user.name);$username[$authorID]];(server.members);$membersCount];(server.name);$serverName];(user.creationDate);$creationDate[$authorID;date]]
        
        $onlyIf[$channelExists[$getServerVar[wlcchannel]]==true;]
        $onlyIf[$getservervar[wlcstatus]==on;]
        $suppressErrors
        $endelseif
$endif
        `
})