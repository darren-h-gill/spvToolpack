<script setup lang="ts">
import { ref } from 'vue'
import type { TabItem } from '../components/SpvNavTabs/SpvNavTabs.vue'
import PlaygroundItem from './PlaygroundItem.vue'

// ─── General component refs ───────────────────────────────────────────────────

const alertVisible  = ref(true)
const modalOpen     = ref(false)
const toastShow     = ref(false)
const offcanvasOpen = ref(false)
const activeTab     = ref('tab1')
const inputVal      = ref('')
const selectVal     = ref('')
const textareaVal   = ref('')

const selectOptions = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
]

const tabs: TabItem[] = [
  { key: 'tab1', label: 'Alerts & Toast' },
  { key: 'tab2', label: 'Modal & Offcanvas' },
  { key: 'tab3', label: 'Form Controls' },
  { key: 'tab4', label: 'SpvFormControl' },
  { key: 'tab5', label: 'Select & Options' },
  { key: 'tab6', label: 'LookupMulti' },
]

// ─── Tab 4 — SpvFormControl values ───────────────────────────────────────────

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

const fcPassword        = ref<string | null>(null)
const fcPasswordConfirm = ref<string | null>(null)
const fcText     = ref<string | null>(null)
const fcTextarea = ref<string | null>(null)
const fcColour   = ref<string | null>(null)
const fcNumber   = ref<number | null>(null)
const fcPercent  = ref<number | null>(0.8)
const fcCurrency = ref<number | null>(null)
const fcDate     = ref<string | null>('2026-06-08T00:00:00Z')
const fcDt       = ref<string | null>('2026-06-08T13:30:00Z')

const C_PASSWORD = `\
<SpvFormControl
  type="password"
  v-model="fcPassword"
  label="Password"
  required
  :min-length="8"
  :mixed-case="true"
  :required-characters="['0123456789', '!@#$%^&*()']"
/>`

const C_PASSWORD_CONFIRM = `\
<SpvFormControl
  type="password"
  v-model="fcPasswordConfirm"
  label="Confirm password"
  required
  :must-match="fcPassword"
/>`

const C_TEXTAREA = `\
<SpvFormControl
  sp-type="Note"
  v-model="fcTextarea"
  label="Textarea (Note field)"
  placeholder="Write something..."
  :rows="4"
/>`

const C_TEXT_PLAIN = `\
<SpvFormControl
  sp-type="Text"
  v-model="fcText"
  label="Text — plain string suggestions"
  placeholder="Type a fruit..."
  :options="textSuggestions"
/>`

const C_TEXT_OBJ_AUTO = `\
<SpvFormControl
  sp-type="Text"
  v-model="fcText"
  label="Text — object options (auto Title fallback)"
  placeholder="Type a project..."
  :options="objectSuggestions"
/>`

const C_TEXT_OBJ_LABEL = `\
<SpvFormControl
  sp-type="Text"
  v-model="fcText"
  label="Text — object options (explicit optionLabel)"
  placeholder="Type a widget..."
  :options="customSuggestions"
  option-label="description"
/>`

const C_TEXT_STRICT = `\
<SpvFormControl
  sp-type="Text"
  v-model="fcText"
  label="Text — strict (must match list)"
  placeholder="Type a fruit exactly..."
  :options="textSuggestions"
  option-strict
  required
/>`

const C_CURRENCY = `\
<SpvFormControl
  sp-type="Currency"
  v-model="fcCurrency"
  label="Currency field (GBP)"
  placeholder="0.00"
  :min="0"
  required
/>`

const C_NUMBER = `\
<SpvFormControl
  type="number"
  v-model="fcNumber"
  label="Number field"
  placeholder="Enter a number"
  :min="0"
  :max="1000"
  required
/>`

const C_PERCENT = `\
<SpvFormControl
  type="percent"
  v-model="fcPercent"
  label="Percent field"
  placeholder="Enter %"
  :min="0"
  :max="100"
  required
/>`

const C_COLOUR = `\
<SpvFormControl
  type="color"
  v-model="fcColour"
  label="Colour picker"
  required
/>`

const C_DATE = `\
<SpvFormControl
  sp-type="DateTime"
  type="date"
  v-model="fcDate"
  label="Date only (no TZ conversion)"
/>`

const C_DATETIME_BROWSER = `\
<SpvFormControl
  sp-type="DateTime"
  type="datetime-local"
  v-model="fcDt"
  label="DateTime (browser TZ)"
/>`

const C_DATETIME_NY = `\
<SpvFormControl
  sp-type="DateTime"
  type="datetime-local"
  timezone="America/New_York"
  v-model="fcDt"
  label="DateTime (New York TZ)"
/>`

// ─── Tab 5 — Select & Options values ─────────────────────────────────────────

const choiceOptions = ['Yes', 'No', 'N/A']
const lookupOptions = [
  { Id: 1, Title: 'Finance' },
  { Id: 2, Title: 'Operations' },
  { Id: 3, Title: 'Technology' },
]

const fcSelectString   = ref<string | null>(null)
const fcSelectLookup   = ref<Record<string, unknown> | null>(null)
const fcSelectLookupId = ref<number | null>(null)
const fcLookupSingle   = ref<number | null>(null)
const fcRadio          = ref<string | null>(null)
const fcCheckboxes     = ref<string[] | null>(null)
const fcCheckboxesStacked = ref<string[] | null>(null)
const fcSwitch         = ref<boolean | null>(null)
const fcSwitchRequired = ref<boolean | null>(null)

const C_CHOICE_STRING = `\
<SpvFormControl
  sp-type="Choice"
  v-model="fcSelectString"
  label="Choice — plain strings (Yes/No/N/A)"
  placeholder="Select a value..."
  :options="choiceOptions"
  required
/>`

const C_CHOICE_OBJ = `\
<SpvFormControl
  sp-type="Choice"
  v-model="fcSelectLookup"
  label="Choice — emit whole object"
  placeholder="Select a department..."
  :options="lookupOptions"
/>`

const C_LOOKUP_ID = `\
<SpvFormControl
  sp-type="Lookup"
  v-model="fcSelectLookupId"
  label="Lookup — Id only (auto from sp-type)"
  placeholder="Select a department..."
  :options="lookupOptions"
  required
/>`

const C_LOOKUP_SINGLE = `\
<SpvFormControl
  sp-type="Lookup"
  type="lookup"
  v-model="fcLookupSingle"
  label="Lookup — single typeahead"
  placeholder="Search departments…"
  :options="lookupOptions"
  required
/>`

const C_SWITCH = `\
<SpvFormControl
  sp-type="Boolean"
  v-model="fcSwitch"
  label="Switch (optional)"
/>`

const C_SWITCH_REQUIRED = `\
<SpvFormControl
  sp-type="Boolean"
  v-model="fcSwitchRequired"
  label="Switch (required — must be toggled)"
  required
/>`

const C_RADIO = `\
<SpvFormControl
  type="radio"
  v-model="fcRadio"
  label="Radio — single choice (click again to deselect)"
  :options="choiceOptions"
  required
/>`

const C_CHECKBOXES = `\
<SpvFormControl
  type="checkboxes"
  v-model="fcCheckboxes"
  label="Checkboxes — inline (default)"
  :options="choiceOptions"
/>`

const C_CHECKBOXES_STACKED = `\
<SpvFormControl
  type="checkboxes"
  v-model="fcCheckboxesStacked"
  label="Checkboxes — stacked"
  :options="choiceOptions"
  stacked
  required
/>`

// ─── Tab 6 — LookupMulti values ──────────────────────────────────────────────

const departmentOptions = [
  { Id: 1, Title: 'Finance' },
  { Id: 2, Title: 'Operations' },
  { Id: 3, Title: 'Technology' },
  { Id: 4, Title: 'Human Resources' },
  { Id: 5, Title: 'Marketing' },
  { Id: 6, Title: 'Legal' },
]
const skillOptions = ['Vue', 'TypeScript', 'SharePoint', 'React', 'Node.js', 'CSS', 'Testing']

const fcMultiIds     = ref<number[] | null>(null)
const fcMultiObjs    = ref<Record<string, unknown>[] | null>(null)
const fcMultiStrings = ref<string[] | null>(null)
const fcAsyncUsers   = ref<number[] | null>(null)

const asyncUserOptions = ref<{ Id: number; Title: string }[]>([])
const asyncUserLoading = ref(false)

let searchDebounceTimer: ReturnType<typeof setTimeout> | null = null

async function onUserSearch(query: string) {
  if (searchDebounceTimer) clearTimeout(searchDebounceTimer)
  if (!query) {
    asyncUserOptions.value = []
    asyncUserLoading.value = false
    return
  }
  searchDebounceTimer = setTimeout(async () => {
    asyncUserLoading.value = true
    try {
      const res  = await fetch(`https://dummyjson.com/users/search?q=${encodeURIComponent(query)}&limit=8&select=id,firstName,lastName`)
      const data = await res.json() as { users: { id: number; firstName: string; lastName: string }[] }
      asyncUserOptions.value = data.users.map(u => ({ Id: u.id, Title: `${u.firstName} ${u.lastName}` }))
    } catch {
      asyncUserOptions.value = []
    } finally {
      asyncUserLoading.value = false
    }
  }, 300)
}

const C_MULTI_IDS = `\
<SpvFormControl
  sp-type="LookupMulti"
  v-model="fcMultiIds"
  label="LookupMulti — Id array (default)"
  placeholder="Search departments…"
  :options="departmentOptions"
  required
/>`

const C_MULTI_OBJS = `\
<SpvFormControl
  sp-type="LookupMulti"
  v-model="fcMultiObjs"
  label="LookupMulti — whole objects"
  placeholder="Search departments…"
  :options="departmentOptions"
  :option-value="(item) => item"
/>`

const C_MULTI_STRINGS = `\
<SpvFormControl
  sp-type="MultiChoice"
  type="lookupMulti"
  v-model="fcMultiStrings"
  label="MultiChoice — plain string options"
  placeholder="Search skills…"
  :options="skillOptions"
/>`

const C_MULTI_ASYNC = `\
<SpvFormControl
  sp-type="UserMulti"
  v-model="fcAsyncUsers"
  label="UserMulti — async search"
  placeholder="Type a name to search…"
  :options="asyncUserOptions"
  required
  @search="onUserSearch"
/>`
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">spvToolpack Dev Playground</h1>

    <SpvNavTabs v-model="activeTab" :tabs="tabs">

      <!-- ── Tab 1: Alerts & Toast ──────────────────────────────────────── -->
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

      <!-- ── Tab 2: Modal & Offcanvas ──────────────────────────────────── -->
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

      <!-- ── Tab 3: Basic Form Controls ────────────────────────────────── -->
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

      <!-- ── Tab 4: SpvFormControl ──────────────────────────────────────── -->
      <template #tab4>
        <div class="pt-3">
          <h5>Password</h5>
          <div class="row g-3">
            <div class="col-md-6">
              <PlaygroundItem :code="C_PASSWORD">
                <SpvFormControl
                  type="password"
                  v-model="fcPassword"
                  label="Password"
                  placeholder="Enter password"
                  required
                  :min-length="8"
                  :mixed-case="true"
                  :required-characters="['0123456789', '!@#$%^&*()']"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-6">
              <PlaygroundItem :code="C_PASSWORD_CONFIRM">
                <SpvFormControl
                  type="password"
                  v-model="fcPasswordConfirm"
                  label="Confirm password"
                  placeholder="Repeat password"
                  required
                  :must-match="fcPassword"
                />
              </PlaygroundItem>
            </div>
          </div>

          <h5 class="mt-4">Text &amp; Textarea</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <PlaygroundItem :code="C_TEXTAREA">
                <SpvFormControl
                  sp-type="Note"
                  v-model="fcTextarea"
                  label="Textarea (Note field)"
                  placeholder="Write something..."
                  :rows="4"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_TEXT_PLAIN">
                <SpvFormControl
                  sp-type="Text"
                  v-model="fcText"
                  label="Text — plain string suggestions"
                  placeholder="Type a fruit..."
                  :options="textSuggestions"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_TEXT_OBJ_AUTO">
                <SpvFormControl
                  sp-type="Text"
                  v-model="fcText"
                  label="Text — object options (auto Title fallback)"
                  placeholder="Type a project..."
                  :options="objectSuggestions"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_TEXT_OBJ_LABEL">
                <SpvFormControl
                  sp-type="Text"
                  v-model="fcText"
                  label="Text — object options (explicit optionLabel)"
                  placeholder="Type a widget..."
                  :options="customSuggestions"
                  option-label="description"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_TEXT_STRICT">
                <SpvFormControl
                  sp-type="Text"
                  v-model="fcText"
                  label="Text — strict (must match list)"
                  placeholder="Type a fruit exactly..."
                  :options="textSuggestions"
                  option-strict
                  required
                />
              </PlaygroundItem>
            </div>
          </div>

          <h5 class="mt-4">Numeric &amp; Colour</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <PlaygroundItem :code="C_CURRENCY">
                <SpvFormControl
                  sp-type="Currency"
                  v-model="fcCurrency"
                  label="Currency field (GBP)"
                  placeholder="0.00"
                  :min="0"
                  required
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_NUMBER">
                <SpvFormControl
                  type="number"
                  v-model="fcNumber"
                  label="Number field"
                  placeholder="Enter a number"
                  :min="0"
                  :max="1000"
                  required
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_PERCENT">
                <SpvFormControl
                  type="percent"
                  v-model="fcPercent"
                  label="Percent field"
                  placeholder="Enter %"
                  :min="0"
                  :max="100"
                  required
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_COLOUR">
                <SpvFormControl
                  type="color"
                  v-model="fcColour"
                  label="Colour picker"
                  required
                />
              </PlaygroundItem>
            </div>
          </div>

          <h5 class="mt-4">Date &amp; Time</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <PlaygroundItem :code="C_DATE">
                <SpvFormControl
                  sp-type="DateTime"
                  type="date"
                  v-model="fcDate"
                  label="Date only (no TZ conversion)"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_DATETIME_BROWSER">
                <SpvFormControl
                  sp-type="DateTime"
                  type="datetime-local"
                  v-model="fcDt"
                  label="DateTime (browser TZ)"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_DATETIME_NY">
                <SpvFormControl
                  sp-type="DateTime"
                  type="datetime-local"
                  timezone="America/New_York"
                  v-model="fcDt"
                  label="DateTime (New York TZ)"
                />
              </PlaygroundItem>
            </div>
          </div>

          <hr>
          <h6 class="text-muted">SP (stored) values:</h6>
          <pre class="bg-light p-2 rounded"><code>{{ { fcTextarea, fcText, fcCurrency, fcNumber, fcPercent, fcColour, fcDate, fcDt } }}</code></pre>
          <div class="mt-2 text-muted small">
            <strong>Percent note:</strong> display shows {{ fcPercent != null ? (fcPercent * 100) : '–' }}%,
            stored value is {{ fcPercent }}
          </div>
        </div>
      </template>

      <!-- ── Tab 5: Select & Options ────────────────────────────────────── -->
      <template #tab5>
        <div class="pt-3">
          <h5>Select</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <PlaygroundItem :code="C_CHOICE_STRING">
                <SpvFormControl
                  sp-type="Choice"
                  v-model="fcSelectString"
                  label="Choice — plain strings (Yes/No/N/A)"
                  placeholder="Select a value..."
                  :options="choiceOptions"
                  required
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_CHOICE_OBJ">
                <SpvFormControl
                  sp-type="Choice"
                  v-model="fcSelectLookup"
                  label="Choice — emit whole object"
                  placeholder="Select a department..."
                  :options="lookupOptions"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_LOOKUP_ID">
                <SpvFormControl
                  sp-type="Lookup"
                  v-model="fcSelectLookupId"
                  label="Lookup — Id only (auto from sp-type)"
                  placeholder="Select a department..."
                  :options="lookupOptions"
                  required
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_LOOKUP_SINGLE">
                <SpvFormControl
                  sp-type="Lookup"
                  type="lookup"
                  v-model="fcLookupSingle"
                  label="Lookup — single typeahead"
                  placeholder="Search departments…"
                  :options="lookupOptions"
                  required
                />
              </PlaygroundItem>
            </div>
          </div>

          <h5 class="mt-4">Switch</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <PlaygroundItem :code="C_SWITCH">
                <SpvFormControl
                  sp-type="Boolean"
                  v-model="fcSwitch"
                  label="Switch (optional)"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_SWITCH_REQUIRED">
                <SpvFormControl
                  sp-type="Boolean"
                  v-model="fcSwitchRequired"
                  label="Switch (required — must be toggled)"
                  required
                />
              </PlaygroundItem>
            </div>
          </div>

          <h5 class="mt-4">Radio &amp; Checkboxes</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <PlaygroundItem :code="C_RADIO">
                <SpvFormControl
                  type="radio"
                  v-model="fcRadio"
                  label="Radio — single choice (click again to deselect)"
                  :options="choiceOptions"
                  required
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_CHECKBOXES">
                <SpvFormControl
                  type="checkboxes"
                  v-model="fcCheckboxes"
                  label="Checkboxes — inline (default)"
                  :options="choiceOptions"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-4">
              <PlaygroundItem :code="C_CHECKBOXES_STACKED">
                <SpvFormControl
                  type="checkboxes"
                  v-model="fcCheckboxesStacked"
                  label="Checkboxes — stacked"
                  :options="choiceOptions"
                  stacked
                  required
                />
              </PlaygroundItem>
            </div>
          </div>

          <hr>
          <h6 class="text-muted">Stored values:</h6>
          <pre class="bg-light p-2 rounded"><code>{{ { fcSelectString, fcSelectLookup, fcSelectLookupId, fcLookupSingle, fcSwitch, fcSwitchRequired, fcRadio, fcCheckboxes, fcCheckboxesStacked } }}</code></pre>
        </div>
      </template>

      <!-- ── Tab 6: LookupMulti ─────────────────────────────────────────── -->
      <template #tab6>
        <div class="pt-3">
          <h5>LookupMulti</h5>
          <div class="row g-3">
            <div class="col-md-6">
              <PlaygroundItem :code="C_MULTI_IDS">
                <SpvFormControl
                  sp-type="LookupMulti"
                  v-model="fcMultiIds"
                  label="LookupMulti — Id array (default)"
                  placeholder="Search departments…"
                  :options="departmentOptions"
                  required
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-6">
              <PlaygroundItem :code="C_MULTI_OBJS">
                <SpvFormControl
                  sp-type="LookupMulti"
                  v-model="fcMultiObjs"
                  label="LookupMulti — whole objects"
                  placeholder="Search departments…"
                  :options="departmentOptions"
                  :option-value="(item: Record<string, unknown>) => item"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-6">
              <PlaygroundItem :code="C_MULTI_STRINGS">
                <SpvFormControl
                  sp-type="MultiChoice"
                  type="lookupMulti"
                  v-model="fcMultiStrings"
                  label="MultiChoice — plain string options"
                  placeholder="Search skills…"
                  :options="skillOptions"
                />
              </PlaygroundItem>
            </div>
            <div class="col-md-6">
              <PlaygroundItem :code="C_MULTI_ASYNC">
                <SpvFormControl
                  sp-type="UserMulti"
                  v-model="fcAsyncUsers"
                  label="UserMulti — async search (dummyjson.com)"
                  placeholder="Type a name to search…"
                  :options="asyncUserOptions"
                  required
                  @search="onUserSearch"
                />
                <div v-if="asyncUserLoading" class="text-muted small mt-1">
                  <i class="fas fa-spinner fa-spin me-1" /> Searching…
                </div>
              </PlaygroundItem>
            </div>
          </div>

          <hr>
          <h6 class="text-muted">Stored values:</h6>
          <pre class="bg-light p-2 rounded"><code>{{ { fcMultiIds, fcMultiObjs, fcMultiStrings, fcAsyncUsers } }}</code></pre>
        </div>
      </template>

    </SpvNavTabs>
  </div>
</template>
