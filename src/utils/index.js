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
