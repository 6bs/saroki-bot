module.exports = ({
name: "cat",
desc: "Sends a Cat image",
usage: "cat",
code: `
$footer[stay safe <3]
$color[$getServerVar[embedcolor]]
$description[$jsonRequest[https://no-api-key.com/api/v1/animals/cat;fact]]
$image[attachment://cat.jpg]
$attachment[$jsonRequest[https://no-api-key.com/api/v1/animals/cat;image];cat.jpg]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });