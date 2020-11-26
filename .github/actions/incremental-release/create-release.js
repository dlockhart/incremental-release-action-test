const { Octokit } = require('@octokit/core');

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN
});

process.exit();