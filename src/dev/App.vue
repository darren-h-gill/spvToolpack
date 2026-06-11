<script setup lang="ts">
import { ref } from 'vue'
import type { TabItem } from '../components/SpvNavTabs/SpvNavTabs.vue'

const alertVisible = ref(true)
const modalOpen = ref(false)
const toastShow = ref(false)
const offcanvasOpen = ref(false)
const activeTab = ref('tab1')
const inputVal = ref('')
const selectVal = ref('')
const textareaVal = ref('')

// SpvFormControl test values — text datalist options
const textSuggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
const objectSuggestions = [
  { Id: 1, Title: 'Project Alpha' },
  { Id: 2, Title: 'Project Beta' },
  { Id: 3, Title: 'Project Gamma' },
]
const customSuggestions = [
  { code: 'A001', description: 'Widget Type A' },
  { code: 'B002', description: 'Widget Type B' },
  { code: 'C003', description: 'Widget Type C' },
]

const fcPassword = ref<string | null>(null)
const fcText    = ref<string | null>(null)
const fcNumber  = ref<number | null>(null)
const fcPercent = ref<number | null>(0.8)           // stored as decimal
const fcDate    = ref<string | null>('2026-06-08T00:00:00Z')  // SP date-only
const fcDt      = ref<string | null>('2026-06-08T13:30:00Z')  // SP datetime UTC

const tabs: TabItem[] = [
  { key: 'tab1', label: 'Alerts & Toast' },
  { key: 'tab2', label: 'Modal & Offcanvas' },
  { key: 'tab3', label: 'Form Controls' },
  { key: 'tab4', label: 'SpvFormControl' }
]

const selectOptions = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' }
]
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">spvToolpack Dev Playground</h1>

    <SpvNavTabs v-model="activeTab" :tabs="tabs">
      <template #tab1>
        <div class="pt-3">
          <h5>Alerts</h5>
          <SpvAlert variant="success" dismissible v-model="alertVisible">
            This is a dismissible success alert.
          </SpvAlert>
          <button v-if="!alertVisible" class="btn btn-sm btn-outline-secondary mb-3" @click="alertVisible = true">
            Restore alert
          </button>
          <SpvAlert variant="warning">Static warning alert — not dismissible.</SpvAlert>
          <SpvAlert variant="danger">Danger alert example.</SpvAlert>

          <h5 class="mt-4">Toast</h5>
          <button class="btn btn-primary" @click="toastShow = true">Show Toast</button>
          <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <SpvToast v-model="toastShow" title="spvToolpack" subtitle="just now" variant="success">
              Component rendered successfully!
            </SpvToast>
          </div>
        </div>
      </template>

      <template #tab2>
        <div class="pt-3">
          <h5>Modal</h5>
          <button class="btn btn-primary me-2" @click="modalOpen = true">Open Modal</button>
          <SpvModal v-model="modalOpen" title="Example Modal" centered>
            <p>Modal body content goes here.</p>
            <template #footer>
              <button class="btn btn-secondary" @click="modalOpen = false">Close</button>
              <button class="btn btn-primary">Save changes</button>
            </template>
          </SpvModal>

          <h5 class="mt-4">Offcanvas</h5>
          <button class="btn btn-secondary" @click="offcanvasOpen = true">Open Offcanvas</button>
          <SpvOffcanvas v-model="offcanvasOpen" title="Offcanvas Panel" placement="end">
            <p>Offcanvas body content.</p>
          </SpvOffcanvas>
        </div>
      </template>

      <template #tab3>
        <div class="pt-3">
          <SpvInput
            v-model="inputVal"
            id="dev-input"
            label="Text Input"
            placeholder="Type something..."
            help-text="This is help text beneath the input."
          />
          <SpvSelect
            v-model="selectVal"
            id="dev-select"
            label="Select"
            placeholder="Choose an option"
            :options="selectOptions"
          />
          <SpvTextarea
            v-model="textareaVal"
            id="dev-textarea"
            label="Textarea"
            placeholder="Write something..."
            :rows="4"
          />
          <pre class="bg-light p-2 rounded mt-3"><code>{{ { inputVal, selectVal, textareaVal } }}</code></pre>
        </div>
      </template>

      <template #tab4>
        <div class="pt-3">
          <h5>SpvFormControl</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <SpvFormControl
                type="password"
                v-model="fcPassword"
                label="Password"
                placeholder="Enter password"
                required
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                sp-type="Text"
                v-model="fcText"
                label="Text — plain string suggestions"
                placeholder="Type a fruit..."
                :options="textSuggestions"
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                sp-type="Text"
                v-model="fcText"
                label="Text — object options (auto Title fallback)"
                placeholder="Type a project..."
                :options="objectSuggestions"
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                sp-type="Text"
                v-model="fcText"
                label="Text — object options (explicit optionLabel)"
                placeholder="Type a widget..."
                :options="customSuggestions"
                option-label="description"
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                sp-type="Text"
                v-model="fcText"
                label="Text — strict (must match list)"
                placeholder="Type a fruit exactly..."
                :options="textSuggestions"
                option-strict
                required
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                type="number"
                v-model="fcNumber"
                label="Number field"
                placeholder="Enter a number"
                :min="0"
                :max="1000"
                required
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                type="percent"
                v-model="fcPercent"
                label="Percent field"
                placeholder="Enter %"
                :min="0"
                :max="100"
                required
              />
            </div>
          </div>
          <div class="row g-3 mt-1">
            <div class="col-md-4">
              <SpvFormControl
                sp-type="DateTime"
                type="date"
                v-model="fcDate"
                label="Date only (no TZ conversion)"
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                sp-type="DateTime"
                type="datetime-local"
                v-model="fcDt"
                label="DateTime (browser TZ)"
              />
            </div>
            <div class="col-md-4">
              <SpvFormControl
                sp-type="DateTime"
                type="datetime-local"
                timezone="America/New_York"
                v-model="fcDt"
                label="DateTime (New York TZ)"
              />
            </div>
          </div>
          <hr>
          <h6 class="text-muted">SP (stored) values:</h6>
          <pre class="bg-light p-2 rounded"><code>{{ { fcText, fcNumber, fcPercent, fcDate, fcDt } }}</code></pre>
          <div class="mt-2 text-muted small">
            <strong>Percent note:</strong> display shows {{ fcPercent != null ? (fcPercent * 100) : '–' }}%,
            stored value is {{ fcPercent }}
          </div>
        </div>
      </template>
    </SpvNavTabs>
  </div>
</template>
