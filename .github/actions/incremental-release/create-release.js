const { Octokit } = require('@octokit/core');

const release = process.argv[2];

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN
});

console.log(`Creating release ${release}...`)

process.exit();