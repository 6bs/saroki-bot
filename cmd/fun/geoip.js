const { error, quickEmbed } = require("/home/runner/bot/errormsg.js");
module.exports = ({
name: "geoip",
usage: "geoip (ip)",
desc: "Returns GeoIP of given IP",

code: `
$color[$getServerVar[embedcolor]]
$description[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$jsonrequest[https://saroki.tk/api/geoip?ip=$message];,;
];";];\\];];\\[*;
];{;
];};]]


$onlyIf[$getGlobalUserVar[blacklist]==off;]
    `
    });