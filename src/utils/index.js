import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: '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',
});

/**
 * octokit octokit
 *
 * @param {string} method API REST
 * @param {*} url API url
 * @param {*} query API query
 */
const request = async (method, url, query) => {
  return octokit.request(`${method} ${url}`, query);
};

export default request;
