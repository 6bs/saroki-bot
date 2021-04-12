module.exports = ({
name: "dog",
desc: "Sends a Dog image",
usage: "dog",

code: `
$footer[stay safe <3]
$color[$getServerVar[embedcolor]]
$description[$jsonRequest[https://no-api-key.com/api/v1/animals/dog;fact]]
$image[attachment://dog.jpg]
$attachment[$jsonRequest[https://no-api-key.com/api/v1/animals/dog;image];dog.jpg]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });