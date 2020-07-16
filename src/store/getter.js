const getters = {
  theme: state => {
    return state.theme.themeStyle
  },
  themeName: state => {
    return state.theme.themeName
  }
}
export default getters
