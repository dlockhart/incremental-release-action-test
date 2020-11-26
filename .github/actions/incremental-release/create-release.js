const { Octokit } = require('@octokit/rest');

const release = process.argv[2];
const [owner, repo] = process.env['GITHUB_REPOSITORY'].split('/');

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN
});

console.log(`Creating release ${release} ${owner}\\${repo}...`)

const response = await octokit.repos.createRelease({
	owner: owner,
	repo: repo,
	tag_name: release,
	name: release
});
console.log(response);

process.exit(0);