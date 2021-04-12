module.exports = ({
type: "timeout",
code: `$takeRoles[$timeoutData[user];$getServerVar[mutedrole]]
    $onlyIf[$timeoutData[command]==tempmute;]`
})