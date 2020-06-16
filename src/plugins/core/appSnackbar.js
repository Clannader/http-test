import AppSnackbarComponent from 'components/core/AppSnackbar'
import Vue from 'vue'

class AppSnackbar {
  static toast(message = '', color = 'success', duration = 3000) {
    const AppSnackbarConstructor = Vue.extend(AppSnackbarComponent)
    const instance = new AppSnackbarConstructor(
      {
        propsData: {
          timeout: duration
        }
      }
    )
    instance.$mount(document.createElement('div'))

    document.getElementById('app').appendChild(instance.$el)

    instance.color = color
    instance.message = message
  }

  static success(message, duration) {
    this.toast(message, 'success', duration)
  }

  static info(message, duration) {
    this.toast(message, 'info', duration)
  }

  static error(message, duration) {
    this.toast(message, 'error', duration)
  }
}

export default AppSnackbar
