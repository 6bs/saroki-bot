module.exports = ({
name: "help",
usage: "help <command>",
code: `
$if[$message==]
$color[$getServerVar[embedcolor]]
$description[You can use the \`bug\` Command to Report errors or bugs to the Developer
Use \`help <command name>\` to get a commands usage / aliases]
$title[Help Page;https://saroki.tk]

$addField[:link: Link \`4\`;
[Invite\\]($getBotInvite) | [Website\\](https://saroki.tk) | [Saroki API\\](https://saroki.tk/api) | [Top.gg (vote)\\](https://top.gg/bot/786625849830670336);yes]

$addField[<:databasepog:776500633666584626> Utility \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/utility').length;yes]\`;
\`\`\`$getServerVar[prefix]help-utility\`\`\`;yes]

$addField[<a:voice:787042359485136946> Music \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/music').length;yes]\`;
\`\`\`$getServerVar[prefix]help-music\`\`\`;yes]

$addField[<:mod:776806560713277450> Moderation \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/mod').length;yes]\`;
\`\`\`$getServerVar[prefix]help-mod\`\`\`;yes]

$addField[<:mcpicke:813421148016082985> Minecraft \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/minecraft').length;yes]\`;
\`\`\`$getServerVar[prefix]help-mc\`\`\`;yes]

$addField[<:info:777154094476689418> Info \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/info').length;yes]\`;
\`\`\`$getServerVar[prefix]help-info\`\`\`;yes]

$addField[<a:Pepe_Pew_Pew:796365835823742977> Fun \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/fun').length;yes]\`;
\`\`\`$getServerVar[prefix]help-fun\`\`\`;yes]

$addField[:underage: NSFW \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/nsfw').length;yes]\`;
\`\`\`$getServerVar[prefix]help-nsfw\`\`\`;yes]

$addField[<:welcome:776488476950003813> Welcome \`$djseval[require("fs"). readdirSync(process.cwd()+'/cmd/welcome').length;yes]\`;
\`\`\`$getServerVar[prefix]help-wlc\`\`\`;yes]
$footer[$commandsCount Commands;$userAvatar[$clientID]]

$else
 $if[$commandInfo[$message[1];desc]!=] 
 $addField[Description;$commandInfo[$message[1];desc];no]
 $else
 $addField[Description;None;no]
 $endif

 $if[$commandInfo[$message;aliases]!=] 
 $addField[Aliases;$replacetext[$commandInfo[$message[1];aliases];,; | ];no]
 $else
 $addField[Aliases;None;no]
 $endif
 
 $if[$commandInfo[$message[1];usage]!=] 
 $addField[Usage;$getServerVar[prefix]$commandInfo[$message[1];usage];no]
 $else
 $addField[Usage;None;no]
 $endif


 
 $color[$getServerVar[embedcolor]]
 $description[Required arguments = \`()\`
Optional arguments = \`<>\`]
 $title[Information about \`$commandInfo[$message[1];name]\`]
 $onlyIf[$commandInfo[$message[1];name]!=;] 
 $endif


    $onlyIf[$getGlobalUserVar[blacklist]==off;]
     
 $suppressErrors
    `
    });