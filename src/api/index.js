import request from '@/utils';

/**
 * 取得特定user的Github repos
 *
 * @param {string} user username
 * @param {ReposPayload} query api query
 * @returns {Promise}
 */
const getRepos = async (query) => {
  const payload = {
    ...query,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  };

  return request('GET', `/users/${query.username}/repos`, payload);
};

export default getRepos;
