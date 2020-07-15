const state = {
  themeStyle: { color: 'black', background: '#fff' }
}

const mutations = {
  setTheme (state, { color, bgcolor }) {
    state.themeStyle.color = color
    state.themeStyle.background = bgcolor
  }
}

const actions = {
  updateTheme ({ commit }, style) {
    commit('setTheme', style)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
