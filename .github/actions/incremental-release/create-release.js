const { Octokit } = require('@octokit/rest');

const release = process.argv[2];
const [owner, repo] = process.env['GITHUB_REPOSITORY'].split('/');

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN
});

async function createRelease() {

	console.log(`Creating release ${release} ${owner}\\${repo}...`)

	const response = await octokit.repos.createRelease({
		owner: 'owner',
		repo: repo,
		tag_name: release,
		name: release
	});
	console.log(response);

}

createRelease().then(() => {
	process.exit(0);
}).catch((err) => {
	console.error(err);
	process.exit(1);
});
