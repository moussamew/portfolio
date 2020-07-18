/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fetch = require('node-fetch');

/**
 * Retrieve repositories from GitHub user
 * @param {Function} createNode Create a GraphQL node
 * @param {Function} createContentDigest Create a stable content digest from a string or object
 * @param {String} user GitHub Username
 */
async function fetchGithubRepos(createNode, createContentDigest, user) {
  const GITHUB_REPOS_URL = `https://api.github.com/users/${user}/repos`;
  const response = await fetch(GITHUB_REPOS_URL);
  const responseJSON = await response.json();
  createNode({
    repos: responseJSON,
    id: 'fetchGithubRepos',
    parent: null,
    children: [],
    internal: {
      type: `githubRepos`,
      contentDigest: createContentDigest(responseJSON),
    },
  });
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  await fetchGithubRepos(createNode, createContentDigest, 'moussamew');
};
