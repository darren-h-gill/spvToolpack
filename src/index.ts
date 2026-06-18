export { default } from './plugin'

// Components
export { default as SpvAlert } from './components/SpvAlert/SpvAlert.vue'
export { default as SpvModal } from './components/SpvModal/SpvModal.vue'
export { default as SpvToast } from './components/SpvToast/SpvToast.vue'
export { default as SpvOffcanvas } from './components/SpvOffcanvas/SpvOffcanvas.vue'
export { default as SpvNavTabs } from './components/SpvNavTabs/SpvNavTabs.vue'
export { default as SpvFormControl } from './components/SpvFormControl/SpvFormControl.vue'

// Types
export type { AlertVariant } from './components/SpvAlert/SpvAlert.vue'
export type { ToastVariant } from './components/SpvToast/SpvToast.vue'
export type { TabItem } from './components/SpvNavTabs/SpvNavTabs.vue'
export type { FormControlType, SpType, TListItem, OptionLabelResolver } from './components/SpvFormControl/types'
