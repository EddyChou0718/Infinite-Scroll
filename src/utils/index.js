import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: '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',
});

/**
 * octokit request
 *
 * @param {string} method API REST
 * @param {*} url API url
 * @param {*} query API query
 */
const request = async (method, url, query) => {
  return octokit.request(`${method} ${url}`, query);
};

/**
 * createObserver
 *
 * @param {Function} callback callback
 * @param {Object?} options Observer Options
 */
const createObserver = (callback, options = {}) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, options);

  return observer;
};

export { request, createObserver };
