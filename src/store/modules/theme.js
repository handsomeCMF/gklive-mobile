import qs from 'qs'
const state = {
  themeStyle: window.localStorage.getItem('theme') ? qs.parse(window.localStorage.getItem('theme')) : { color: 'black', background: '#fff' },
  themeName: window.localStorage.getItem('themeName') ? window.localStorage.getItem('themeName') : '经典'
}

const mutations = {
  setTheme (state, { color, bgcolor }) {
    state.themeStyle.color = color
    state.themeStyle.background = bgcolor
  },
  setThemeName (state, name) {
    state.themeName = name
  }
}

const actions = {
  updateTheme ({ commit }, name) {
    var themeStyle = { color: 'black' }
    switch (name) {
      case '经典':
        themeStyle = { color: 'black' }
        break
      case '原谅':
        themeStyle = { color: 'green' }
        break
      case '骚粉':
        themeStyle = { color: 'pink' }
        break
    }
    window.localStorage.setItem('theme', qs.stringify(themeStyle))
    commit('setTheme', themeStyle)
    window.localStorage.setItem('ThemeName', name)
    commit('setThemeName', name)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
