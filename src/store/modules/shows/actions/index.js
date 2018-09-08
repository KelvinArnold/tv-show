import HTTP from './../../../../service/http';

const actions = {
  async GET_DATA({commit}) {
    commit('SET_LOADING', { loading: true });
    const resp_tv_show = await new Promise((resolve, reject) => {
      HTTP.get('/tv-shows/SHOW123.json')
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e);
      })
    });
    const resp_episodes = await new Promise((resolve, reject) => {
      HTTP.get('/episodes/SHOW123.json')
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e);
      })
    });
    setTimeout(() => {
      commit('SET_TV_SHOW', { show: resp_tv_show });
      commit('SET_TV_SHOW_EPISODES', { episodes: resp_episodes });
      commit('SET_LOADING', { loading: false });
    }, 500);
  },
}
// Export
export default actions;