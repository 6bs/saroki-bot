module.exports = ({
name: "panda",
desc: "Returns a Panda image",
usage: "panda",
code: `
$footer[stay safe <3]
$color[$getServerVar[embedcolor]]

$image[attachment://panda.jpg]
$attachment[$jsonRequest[https://some-random-api.ml/img/panda;link];panda.jpg]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });