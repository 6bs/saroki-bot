module.exports = ({
  type: "ready",
  channel: "$randomChannelID",
  code: `
  $djsEval[console.log("Loaded $commandsCount Commands")]
  $djsEval[console.log("Ready on Client $userTag[$clientID] on $serverCount Servers")]
  
  $wait[1s]
  
  $djsEval[console.clear()]
  `
})