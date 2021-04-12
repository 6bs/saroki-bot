const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "translate",
usage: "translate (country id) (text)",
desc: "Translates given text into given Language (Country code)",
code: `
$color[$getServerVar[embedcolor]]
$title[Translator]
$description[Country ID used: \`$message[1]\`]
$addfield[Output;$jsonRequest[https://jastinch-api.ml/translate?to=$message[1]?text=$replaceText[$message;$message[1];];res;error];no]
$addfield[Input;$replaceText[$message;$message[1];];no]

$onlyIf[$jsonRequest[https://jastinch-api.ml/translate?to=$message[1]?text=$replaceText[$message;$message[1];];res;error]!=Language Must be 2 letter alias. E.g 'English > en';${error("Could not find Country ID \`$message[1]\`")}]
$onlyIf[$message[2]!=;${error("Wrong Usage: \`$getServerVar[prefix]translate <country id> <text>\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });