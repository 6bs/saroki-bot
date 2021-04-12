module.exports = ({
name: "bear",
desc: "Sends a Bear image",
usage: "bear",
code: `
$footer[stay safe <3]
$color[$getServerVar[embedcolor]]
$description[$jsonRequest[https://no-api-key.com/api/v1/animals/bear;fact]]
$image[attachment://bear.jpg]
$attachment[$jsonRequest[https://no-api-key.com/api/v1/animals/bear;image];bear.jpg]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });