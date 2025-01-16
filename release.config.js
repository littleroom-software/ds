module.exports = {
  extends: "semantic-release-monorepo",
  branches: [
    "main",
    {
      name: "dev",
      prerelease: "beta",
      channel: "beta",
    },
    {
      name: "*",
      prerelease: "alpha",
      channel: "alpha",
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "style", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "test", release: "patch" },
          { type: "build", release: "patch" },
          { type: "ci", release: "patch" },
          { type: "chore", release: "patch" },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "npm run build --workspace=@littleroom-ui/react && npm run build --workspace=@littleroom-ui/tokens",
        publishCmd: "npm publish --workspace=@littleroom-ui/react --workspace=@littleroom-ui/tokens",
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md", "packages/*/package.json", "packages/*/CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
