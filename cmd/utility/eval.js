const username = `$username[$authorID]`
const discrim = `$discriminator[$authorID]`
const members = `$membersCount`
const guild = `$serverName`
const avatar = `$replaceText[$userAvatar[$authorID];webp;png]`
const background = `https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80`

const axios = require('axios');
module.exports = ({
    name: "eval",
    aliases: ['e'],
    code: `
$eval[$message]
  $onlyIf[$authorID==478594278659063809;<:wrong:786675235742679123> **This Command is only for the Developers. :)**]
  $onlyIf[$getGlobalUserVar[blacklist]==off;]

    `
    });