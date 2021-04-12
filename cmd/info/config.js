module.exports = ({
    name: "config",
    desc: "Sends sarokis server config",
  aliases: ['settings'],
    code: `
        $if[$getServerVar[language]==english]

    $color[$getServerVar[embedcolor]]
    $title[Server Config]

$addField[Log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[logc]==];true;\`\`\`Not set\`\`\`];false;<#$getServerVar[logc]>];yes]
$addField[Muted Role;$replaceText[$replaceText[$checkCondition[$getServerVar[mutedrole]==];true;\`\`\`Not set\`\`\`];false;<@&$getServerVar[mutedrole]>];yes]
$addField[Suggestion Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[suggestion]==];true;\`\`\`Not set\`\`\`];false;<#$getServerVar[suggestion]>]]
$addField[Prefix;\`\`\`$replaceText[$replaceText[$checkCondition[$getServerVar[prefix]==];true;Not set];false;$getServerVar[prefix]]\`\`\`;yes]
    $footer[$serverName | $guildid;$serverIcon]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

        $elseif[$getServerVar[language]==german]
$color[$getServerVar[embedcolor]]
    $title[Server Config]

$addField[Log Kanal;$replaceText[$replaceText[$checkCondition[$getServerVar[logc]==];true;\`\`\`Nicht Gesetzt\`\`\`];false;<#$getServerVar[logc]>];yes]
$addField[Gestummt Role;$replaceText[$replaceText[$checkCondition[$getServerVar[mutedrole]==];true;\`\`\`Nicht Gesetzt\`\`\`];false;<@&$getServerVar[mutedrole]>];yes]
$addField[Vorschlags Kanal;$replaceText[$replaceText[$checkCondition[$getServerVar[suggestion]==];true;\`\`\`Nicht Gesetzt\`\`\`];false;<#$getServerVar[suggestion]>]]
$addField[Prefix;\`\`\`$replaceText[$replaceText[$checkCondition[$getServerVar[prefix]==];true;error];false;$getServerVar[prefix]]\`\`\`;yes]
    $footer[$serverName | $guildid;$serverIcon]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
    $endelseif
    $endif
    `
    });