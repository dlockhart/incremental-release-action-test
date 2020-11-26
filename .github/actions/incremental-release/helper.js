const Octokit = require('@octokit/rest');

const lastCommitMessage = process.argv[2];
const defaultIncrement = process.argv[3];
const dryRun = process.argv[4];

console.log(`Last commit: ${lastCommitMessage}`);
console.log(`Default increment: ${defaultIncrement}`);
console.log(`Dry run? ${dryRun}`);

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN
});

process.exit();