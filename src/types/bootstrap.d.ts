// Ambient types for window.bootstrap (loaded via CDN)
// Covers the Bootstrap 5.3 JS API surface used by spvToolpack components.

interface BootstrapModalOptions {
  backdrop?: boolean | 'static'
  keyboard?: boolean
  focus?: boolean
}

interface BootstrapToastOptions {
  animation?: boolean
  autohide?: boolean
  delay?: number
}

interface BootstrapOffcanvasOptions {
  backdrop?: boolean | 'static'
  keyboard?: boolean
  scroll?: boolean
}

interface BootstrapInstance {
  show(): void
  hide(): void
  toggle(): void
  dispose(): void
}

interface BootstrapModal extends BootstrapInstance {
  new (element: Element, options?: BootstrapModalOptions): BootstrapModal
  getInstance(element: Element): BootstrapModal | null
  getOrCreateInstance(element: Element, options?: BootstrapModalOptions): BootstrapModal
}

interface BootstrapToast extends BootstrapInstance {
  new (element: Element, options?: BootstrapToastOptions): BootstrapToast
  getInstance(element: Element): BootstrapToast | null
  getOrCreateInstance(element: Element, options?: BootstrapToastOptions): BootstrapToast
  isShown(): boolean
}

interface BootstrapOffcanvas extends BootstrapInstance {
  new (element: Element, options?: BootstrapOffcanvasOptions): BootstrapOffcanvas
  getInstance(element: Element): BootstrapOffcanvas | null
  getOrCreateInstance(element: Element, options?: BootstrapOffcanvasOptions): BootstrapOffcanvas
}

interface BootstrapTab extends BootstrapInstance {
  new (element: Element): BootstrapTab
  getInstance(element: Element): BootstrapTab | null
  getOrCreateInstance(element: Element): BootstrapTab
}

interface Window {
  bootstrap: {
    Modal: BootstrapModal
    Toast: BootstrapToast
    Offcanvas: BootstrapOffcanvas
    Tab: BootstrapTab
  }
}
