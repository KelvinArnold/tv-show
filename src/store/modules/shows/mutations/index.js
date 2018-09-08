const mutations = {
  SET_TV_SHOW: (scope, { show }) => {
    scope.tvShow = show;
  },
  SET_TV_SHOW_EPISODES: (scope, { episodes }) => {
    scope.tvShowEpisodes = episodes;
  },
  SET_LOADING: (scope, { loading }) => {
    scope.loading = loading;
  },
}
// Export
export default mutations;