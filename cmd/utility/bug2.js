module.exports = ({
name: "bug",
desc: "Report a bug to the developer",
code: `
<:check:824627790275280946> Succesfully sent Report to **$userTag[478594278659063809]** (Developer)
Note: Spamming the Bug Report command can lead to your account being blacklisted
$onlyIf[$message!=;]
$onlyIf[$getGlobalUserVar[blacklist]==off;]

  `
    });