const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
    name: "unmute",
    usage: "unmute (mention)",
    desc: "Unmutes a user",
    code: `
      $if[$getServerVar[language]==english]

    $addTimestamp
        $takeRoles[$mentioned[1];$getServerVar[mutedrole]]
        $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> **Unmuted** \`$userTag[$mentioned[1]]\`]
        
    $onlyIf[$hasRole[$mentioned[1];$getServerVar[mutedrole]]==true;${error("User is not Muted")}]
    $onlyIf[$mentioned[1]!=;${error("You forgot to mention the user that you want to Mute")}]
    $onlyIf[$getServerVar[mutedrole]!=;${error("Muted Role is not set")}]
    $onlyPerms[kick;${error("Missing __Kick__ Permission")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
  $elseif[$getServerVar[language]==german]
$addTimestamp
        $takeRoles[$mentioned[1];$getServerVar[mutedrole]]
        $color[$getServerVar[embedcolor]]
$description[<:check:824627790275280946> \`$userTag[$mentioned[1]]\` **Entstummt**]
        
    $onlyIf[$hasRole[$mentioned[1];$getServerVar[mutedrole]]==true;${error("User ist nicht Gestummt!")}]
    $onlyIf[$mentioned[1]!=;${error("Du hast vergessen den USer zu erwähnen den du Entstummen willst")}]
    $onlyIf[$getServerVar[mutedrole]!=;${error("Gestummt rolle ist nicht gesetzt")}]
    $onlyPerms[kick;${error("Du brauchst __Kick__ Rechte")}]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
    $endelseIf
$endif`
    });