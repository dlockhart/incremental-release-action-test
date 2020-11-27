const { createActionAuth } = require("@octokit/auth-action"),
	{ Octokit } = require('@octokit/rest');

const release = process.argv[2];
const [owner, repo] = process.env['GITHUB_REPOSITORY'].split('/');

async function createRelease() {

	console.log(`Creating release "${release}"...`)

	const { token } = await auth();
	const octokit = new Octokit({
		auth: token
	});

	await octokit.repos.createRelease({
		owner: owner,
		repo: repo,
		tag_name: release,
		name: release
	});
	console.log('Success!');

}

createRelease().then(() => {
	process.exit(0);
}).catch((err) => {
	console.error(err);
	process.exit(1);
});
