export const state = () => ({
  drawer: false,
  snackbar: {
    active: false,
    color: '',
    text: ''
  },
  progress: false,
  modalAlert: {
    active: false,
    type: 'default',
    data: null
  },

})

export const mutations = {
  mutationsSnackbar(state, payload) {
    state.snackbar.active = payload.active
    state.snackbar.color = payload.color
    state.snackbar.text = payload.text
  },
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  progress(state, val) {
    state.progress = val
  },
  modalAlert(state, val) {
    state.modalAlert.active = val.active
    state.modalAlert.type = val.type
    state.modalAlert.data = val.data
  },
}
