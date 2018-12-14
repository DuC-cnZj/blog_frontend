import * as types from './mutation-types'

export default {
  [types.SET_CURRENT_ARTICLE] (state, { article }) {
    state.currentArticle = article
  },

  [types.SET_TRENDING_ARTICLES] (state, { trendingArticles }) {
    state.trendingArticles = trendingArticles
  },

  [types.SET_TOP_ARTICLES] (state, { topArticles }) {
    state.topArticles = topArticles
  },

  [types.SET_CATEGORIES] (state, { categories }) {
    state.categories = categories
  },

  [types.WELCOME] (state) {
    state.welcome = true
  },

  [types.SET_SEARCH] (state, { search }) {
    state.search = search
  }
}
