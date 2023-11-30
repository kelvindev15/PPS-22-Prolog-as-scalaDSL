var publishCmd = `
git tag -a -f \${nextRelease.version} \${nextRelease.version} -F CHANGELOG.md
sbt ci-release || exit 3
git push --force origin \${nextRelease.version} || exit 6
`
var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    ["@semantic-release/exec", {
        "publishCmd": publishCmd,
    }],
    ["@semantic-release/github", {
        "assets": [
            { "path": "target/scala-3.3.1/*.jar" },
        ]
    }],
    "@semantic-release/git",
)
module.exports = config