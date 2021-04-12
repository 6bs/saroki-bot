module.exports = ({
    name: "meme",
    usage: "meme",
    desc: "Gets a meme image with link and subredit",
    code: `
    $if[$getServerVar[language]==english]

    $color[$getServerVar[embedcolor]]
    $title[r/$jsonRequest[https://meme-api.herokuapp.com/gimme;subreddit];$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink]]
    $description[$jsonRequest[https://meme-api.herokuapp.com/gimme;title]]
    $image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]
    $footer[By: $jsonRequest[https://meme-api.herokuapp.com/gimme;author]]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]

    $elseif[$getServerVar[language]==german]
    $color[$getServerVar[embedcolor]]
    $title[r/$jsonRequest[https://meme-api.herokuapp.com/gimme;subreddit];$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink]]
    $description[$jsonRequest[https://meme-api.herokuapp.com/gimme;title]]
    $image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]
    $footer[Von: $jsonRequest[https://meme-api.herokuapp.com/gimme;author]]
    $onlyIf[$getGlobalUserVar[blacklist]==off;]
$endelseIf
$endif
    `
    });