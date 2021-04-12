const { error, quickEmbed } = require("/home/runner/bot/errormsg.js"); module.exports = ({
name: "weather",
desc: "Get Weather stats of given City",
usage: "weather (city)",
code: `
$footer[stay safe <3]
$color[$getServerVar[embedcolor]]
$description[
Location: \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]\`
Temperature: \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;]\`
Humidity: \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]\`
Wind Speed: \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]\`
Wind Display: \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;]\`
]
$argsCheck[>1;${error("Wrong usage: \`$getServerVar[prefix]weather <city>\`")}]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });