const getters = {
  GET_LOADING: scope => scope.loading,
  // TV SHOW
  GET_TV_SHOW: scope => scope.tvShow,
  GET_TV_SHOW_CAST: scope => scope.tvShow.Cast,
  GET_TV_SHOW_GENRES: scope => scope.tvShow.Genres,
  GET_TV_SHOW_YEAR: scope => scope.tvShow.Year,
  GET_TV_SHOW_SYNOPSIS: scope => scope.tvShow.Synopsis,
  GET_TV_SHOW_TITLE: scope => scope.tvShow.Title,
  GET_TV_SHOW_BACKGROUND: scope => scope.tvShow.Images,
  // EPISODES
  GET_TV_SHOW_EPISODES: scope => scope.tvShowEpisodes,
}
// Export
export default getters;