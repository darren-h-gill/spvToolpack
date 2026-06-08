import type { App } from 'vue'
import SpvAlert from './components/SpvAlert/SpvAlert.vue'
import SpvModal from './components/SpvModal/SpvModal.vue'
import SpvToast from './components/SpvToast/SpvToast.vue'
import SpvOffcanvas from './components/SpvOffcanvas/SpvOffcanvas.vue'
import SpvNavTabs from './components/SpvNavTabs/SpvNavTabs.vue'
import SpvInput from './components/form/SpvInput.vue'
import SpvSelect from './components/form/SpvSelect.vue'
import SpvTextarea from './components/form/SpvTextarea.vue'
import SpvFormControl from './components/SpvFormControl/SpvFormControl.vue'

const components = {
  SpvAlert,
  SpvModal,
  SpvToast,
  SpvOffcanvas,
  SpvNavTabs,
  SpvInput,
  SpvSelect,
  SpvTextarea,
  SpvFormControl
}

export default {
  install(app: App) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  }
}
