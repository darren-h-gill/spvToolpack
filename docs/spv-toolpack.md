# spvToolpack

**Version {{VERSION}}** · built {{BUILD_DATE}} · [{{REPO}}]({{REPO}})

A Vue 3 component library for applications working with **SharePoint REST API / OData**
data. Components bind directly to SharePoint list field values and handle the
transformations SharePoint requires — ISO date formatting, decimal percentages, lookup
field shapes — so application code doesn't have to.

Built with TypeScript, distributed as a UMD bundle for CDN `<script>` use and as an ES
module for bundler-based projects.

---

## Source

This document ships inside the built package. The code it describes lives on GitHub,
pinned to the tag this bundle was built from:

| | |
|---|---|
| **Repository** | [{{REPO}}]({{REPO}}) |
| **This release** | [{{TAG}}]({{REPO}}/releases/tag/{{TAG}}) |
| **Browse the source** | [{{REPO}}/tree/{{TAG}}/src]({{REPO}}/tree/{{TAG}}/src) |
| **Raw source root** | `{{RAW}}/src/` |
| **Raw file example** | [{{RAW}}/src/index.ts]({{RAW}}/src/index.ts) |

Every file link in this document points at `raw.githubusercontent.com` at tag `{{TAG}}`,
so the source you fetch matches the bundle you are running exactly. Swap `{{TAG}}` for
`master` in any URL to see the current development version instead.

```bash
# Fetch a single source file
curl -O {{RAW}}/src/components/SpvFormControl/SpvFormControl.vue

# Or clone at this exact release
git clone --branch {{TAG}} --depth 1 {{REPO}}.git
```

### CDN

`dist/` is committed to the repository, so jsDelivr serves the built bundle directly:

```html
<script src="{{CDN}}/dist/spv-toolpack.umd.js"></script>
```

Pin to `@{{TAG}}` as shown rather than a branch — branch URLs are cached aggressively and
can serve a stale bundle for up to 24 hours.

---

## Prerequisites

spvToolpack does **not** bundle Bootstrap, Font Awesome or Vue. They must be loaded
globally before the library. This is intentional: in SharePoint-hosted pages these are
typically already present.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="{{CDN}}/dist/spv-toolpack.umd.js"></script>
```

The Bootstrap **JS bundle** is required — `SpvModal`, `SpvToast`, `SpvOffcanvas` and
`SpvNavTabs` instantiate Bootstrap's own classes off `window.bootstrap`.

---

## Installation

### As a Vue plugin — registers every component globally

```js
const app = Vue.createApp({ /* ... */ })
app.use(spvToolpack)
app.mount('#app')
```

Source: [`src/plugin.ts`]({{RAW}}/src/plugin.ts)

### As ES module imports

```js
import { SpvFormControl, SpvModal, useClipboard } from 'spv-toolpack'
```

Source: [`src/index.ts`]({{RAW}}/src/index.ts)

---

## SpvFormControl

One component covers every SharePoint field type. Source:
[`SpvFormControl.vue`]({{RAW}}/src/components/SpvFormControl/SpvFormControl.vue)

### The core principle

`v-model` is **always** the SharePoint-format value. Give the control the field's
`TypeAsString` and it picks the right UI, the right icon and the right data handling:

```html
<SpvFormControl sp-type="Text"     v-model="item.Title"    label="Title" required />
<SpvFormControl sp-type="DateTime" v-model="item.DueDate"  label="Due date" />
<SpvFormControl sp-type="Number"   v-model="item.Progress" label="Progress" type="percent" />
```

### `spType` — SharePoint field types

| `spType` | Renders as | `v-model` shape |
|---|---|---|
| `Text` | text input | `string \| null` (max 255) |
| `Note` | textarea | `string \| null` |
| `Number` | number input | `number \| null` |
| `Currency` | currency input | `number \| null` |
| `DateTime` | date picker | `string \| null` (ISO UTC) |
| `Boolean` | switch | `boolean \| null` |
| `Choice` | select | `string \| null` |
| `MultiChoice` | checkbox group | `string[] \| null` |
| `Lookup` | select | lookup `Id`, or the option object |
| `LookupMulti` | typeahead multi-select | array of `Id`s |
| `User` | select | user `Id` |
| `UserMulti` | typeahead multi-select | array of `Id`s |
| `URL` | text input | `string \| null` |
| `Calculated` | text input (read-only) | `string \| null` |
| `TaxonomyFieldType` | select | term value |
| `TaxonomyFieldTypeMulti` | typeahead multi-select | array of term values |

Full mapping: [`types.ts`]({{RAW}}/src/components/SpvFormControl/types.ts)

### `type` — override the rendered control

Set `type` when the stored data type and the desired UI differ. The classic case is a
percentage stored as a decimal:

```html
<SpvFormControl sp-type="Number" type="percent" v-model="item.Progress" label="Progress" />
```

Available: `text`, `password`, `textarea`, `number`, `percent`, `currency`, `date`,
`datetime-local`, `color`, `select`, `checkboxes`, `radio`, `switch`, `lookup`,
`lookupMulti`.

### Date and DateTime handling

`v-model` stays in ISO UTC — the format SharePoint stores and expects. Both `type="date"`
and `type="datetime-local"` convert to and from a timezone for display: the browser's
local timezone by default, or a specific zone via `timezone` (any
[IANA timezone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)):

```html
<SpvFormControl sp-type="DateTime" type="datetime-local" v-model="item.Start" timezone="Europe/London" />
<SpvFormControl sp-type="DateTime" type="date" v-model="item.DueDate" timezone="Europe/London" />
```

This matters for `type="date"` too, not just `datetime-local`: a SharePoint "Date Only"
value isn't guaranteed to be literal midnight UTC. A value entered through SharePoint's
own UI is midnight in the site's regional time zone, converted to UTC — so a UK site can
store `2026-06-07T23:00:00Z` for a date picked as "8 June". Converting through the target
timezone (rather than reading the UTC date substring directly) is what keeps the
displayed day correct across the BST/GMT boundary.

### Common props

| Prop | Type | Description |
|---|---|---|
| `spType` | `SpType` | SharePoint field `TypeAsString` |
| `type` | `FormControlType` | Override the rendered control type |
| `v-model` | — | Always the SP-format value |
| `label` | `string` | Label rendered above the control |
| `labelClass` | `string` | Additional CSS classes for the label |
| `required` | `boolean` | Shows a presence indicator (green/red asterisk) |
| `readonly` | `boolean` | Renders the control as read-only |
| `placeholder` | `string` | Input placeholder text |
| `suppressPrefixIcon` | `boolean` | Hides the Font Awesome type icon |
| `invalid` | `boolean` | Forces the invalid state from your own validation |
| `errorMessage` | `string` | Error text shown when the control is invalid |
| `helpText` | `string` | Helper text rendered below the control |
| `timezone` | `string` | IANA timezone for `date` and `datetime-local` controls |
| `min` / `max` / `step` | `number` | Numeric constraints |
| `maxlength` | `number` | Character limit (defaults to 255 for `Text`) |
| `rows` | `number` | Visible rows for textarea (default 3) |
| `currency` / `locale` | `string` | ISO 4217 code and BCP 47 locale for currency |
| `options` | `TListItem[]` | Items for select, checkboxes, radio, lookup, datalist |
| `optionLabel` | `string \| fn` | How to read the display text from an option |
| `optionValue` | `string \| fn` | How to read the stored value from an option |
| `optionStrict` | `boolean` | Restrict text input to values in `options` |
| `stacked` | `boolean` | One checkbox/radio per line instead of inline |

Password controls add `minLength`, `requiredCharacters`, `mixedCase` and `mustMatch`.

### The required indicator

`required` renders an asterisk after the label: red while the field is empty, green once
it holds a value. It is also inferred from a trailing `*` in the label text, which is
then stripped from the display:

```html
<SpvFormControl sp-type="Text" v-model="item.Title" label="Title *" />
```

Presence logic lives in
[`useFormControl.ts`]({{RAW}}/src/components/SpvFormControl/useFormControl.ts) — empty
strings, empty arrays, empty objects and SharePoint's empty `{ results: [] }` all count
as *no value*.

### Form validation

Every control exposes `requiredPass` for lightweight validation without a form library:

```js
const titleRef = ref(null)
const isValid = computed(() => titleRef.value?.requiredPass ?? true)
```

```html
<SpvFormControl ref="titleRef" sp-type="Text" v-model="item.Title" label="Title" required />
<button :disabled="!isValid">Save</button>
```

Controls also expose `touch()`, which marks a field as interacted with so its error state
becomes visible — useful for revealing every error at once when the user hits Save.

### External validation

`requiredPass` only covers presence. For anything the control cannot work out for itself
— server responses, cross-field rules, business logic — drive `invalid` and supply the
text via `errorMessage`:

```js
const codeError = computed(() =>
  item.value.Code && !/^[A-Z]{3}-\d{4}$/.test(item.value.Code)
    ? 'Use the format ABC-1234'
    : ''
)
```

```html
<SpvFormControl
  sp-type="Text"
  v-model="item.Code"
  label="Project code"
  :invalid="!!codeError"
  :error-message="codeError"
/>
```

- `invalid` is OR-ed with the built-in required check, so it can only add an error, never
  suppress one.
- It ignores touched state and shows immediately — an externally determined error is
  already known to be real. The built-in required check still waits for first blur.
- Set `errorMessage` whenever you set `invalid`. Without it the control falls back to its
  default "This field is required" text, which won't describe your rule.
- `requiredPass` deliberately does **not** reflect `invalid`; it keeps meaning "required
  is satisfied". A submit gate should check both:

```js
const canSave = computed(() => (titleRef.value?.requiredPass ?? true) && !codeError.value)
```

### Internal controls

`SpvFormControl` is a shell that routes to one internal component per control type. These
are not exported, but they are where the behaviour lives — useful when reading the source
or filing an issue:

[`internal/`]({{REPO}}/tree/{{TAG}}/src/components/SpvFormControl/internal) ·
[Text]({{RAW}}/src/components/SpvFormControl/internal/FormControlText.vue) ·
[Password]({{RAW}}/src/components/SpvFormControl/internal/FormControlPassword.vue) ·
[Textarea]({{RAW}}/src/components/SpvFormControl/internal/FormControlTextarea.vue) ·
[Number]({{RAW}}/src/components/SpvFormControl/internal/FormControlNumber.vue) ·
[Percent]({{RAW}}/src/components/SpvFormControl/internal/FormControlPercent.vue) ·
[Currency]({{RAW}}/src/components/SpvFormControl/internal/FormControlCurrency.vue) ·
[Date]({{RAW}}/src/components/SpvFormControl/internal/FormControlDate.vue) ·
[DateTimeLocal]({{RAW}}/src/components/SpvFormControl/internal/FormControlDateTimeLocal.vue) ·
[Color]({{RAW}}/src/components/SpvFormControl/internal/FormControlColor.vue) ·
[Select]({{RAW}}/src/components/SpvFormControl/internal/FormControlSelect.vue) ·
[Options]({{RAW}}/src/components/SpvFormControl/internal/FormControlOptions.vue) ·
[Switch]({{RAW}}/src/components/SpvFormControl/internal/FormControlSwitch.vue) ·
[Lookup]({{RAW}}/src/components/SpvFormControl/internal/FormControlLookup.vue) ·
[LookupMulti]({{RAW}}/src/components/SpvFormControl/internal/FormControlLookupMulti.vue) ·
[Wrapper]({{RAW}}/src/components/SpvFormControl/internal/FormControlWrapper.vue) ·
[RequiredIndicator]({{RAW}}/src/components/SpvFormControl/internal/RequiredIndicator.vue)

---

## General UI components

### SpvAlert

Dismissible alert. `v-model` controls visibility.
Source: [`SpvAlert.vue`]({{RAW}}/src/components/SpvAlert/SpvAlert.vue)

| Prop | Type | Default |
|---|---|---|
| `variant` | `AlertVariant` | `'primary'` |
| `dismissible` | `boolean` | `false` |
| `modelValue` | `boolean` | `true` |

Emits `update:modelValue`, `dismissed`. Default slot is the body.

### SpvModal

Bootstrap modal. `v-model` controls open/close.
Source: [`SpvModal.vue`]({{RAW}}/src/components/SpvModal/SpvModal.vue)

| Prop | Type | Default |
|---|---|---|
| `modelValue` | `boolean` | — |
| `title` | `string` | — |
| `size` | `'sm' \| 'lg' \| 'xl' \| 'fullscreen'` | — |
| `staticBackdrop` | `boolean` | `false` |
| `scrollable` | `boolean` | `false` |
| `centered` | `boolean` | `false` |

Emits `update:modelValue`, `shown`, `hidden`. Slots: default, `header`, `footer`.

### SpvToast

Bootstrap toast. `v-model` controls show/hide.
Source: [`SpvToast.vue`]({{RAW}}/src/components/SpvToast/SpvToast.vue)

| Prop | Type | Default |
|---|---|---|
| `modelValue` | `boolean` | — |
| `title` / `subtitle` | `string` | — |
| `variant` | `ToastVariant` | — |
| `autohide` | `boolean` | `true` |
| `delay` | `number` | `5000` |

Emits `update:modelValue`, `shown`, `hidden`.

### SpvOffcanvas

Bootstrap offcanvas panel. `v-model` controls open/close.
Source: [`SpvOffcanvas.vue`]({{RAW}}/src/components/SpvOffcanvas/SpvOffcanvas.vue)

| Prop | Type | Default |
|---|---|---|
| `modelValue` | `boolean` | — |
| `title` | `string` | — |
| `placement` | `'start' \| 'end' \| 'top' \| 'bottom'` | `'start'` |
| `staticBackdrop` | `boolean` | `false` |
| `scroll` | `boolean` | `false` |

Emits `update:modelValue`, `shown`, `hidden`.

### SpvNavTabs

Tab navigation. `v-model` binds the active tab key.
Source: [`SpvNavTabs.vue`]({{RAW}}/src/components/SpvNavTabs/SpvNavTabs.vue)

| Prop | Type | Default |
|---|---|---|
| `modelValue` | `string` | — |
| `tabs` | `TabItem[]` | — |
| `pills` | `boolean` | `false` |

`TabItem` is `{ key, label, disabled? }`. Emits `update:modelValue`, `change`. Each tab's
pane is a named slot matching its key.

### SpvCopyable

Wraps content with a copy-to-clipboard button that appears on hover. The button shows a
tick on success and a cross on failure.
Source: [`SpvCopyable.vue`]({{RAW}}/src/components/SpvCopyable/SpvCopyable.vue)

| Prop | Type | Description |
|---|---|---|
| `text` | `string` | Text to copy. Defaults to the slot's rendered text. |

Emits `copied` with the copied string.

---

## Composables

### useClipboard

Source: [`useClipboard.ts`]({{RAW}}/src/components/SpvCopyable/useClipboard.ts)

```js
const { copied, error, copy } = useClipboard()   // useClipboard(resetDelay = 1500)
await copy('some text')
```

Returns reactive `copied` and `error` flags plus an async `copy`. Both flags reset
themselves `resetDelay` ms after each copy attempt, which is what drives the tick/cross
feedback in `SpvCopyable`.

---

## Exported types

From [`src/index.ts`]({{RAW}}/src/index.ts):

`AlertVariant`, `ToastVariant`, `TabItem`, `FormControlType`, `SpType`, `TListItem`,
`OptionLabelResolver`.

---

## Package contents

| File | Purpose |
|---|---|
| `dist/spv-toolpack.umd.js` | UMD bundle for CDN / `<script>` use |
| `dist/spv-toolpack.es.js` | ES module for bundlers |
| `dist/style.css` | Component styles |
| `dist/index.d.ts` | TypeScript declarations |
| `dist/spv-toolpack.md` | This document |

---

## Development

```bash
pnpm install
pnpm dev       # dev playground at src/dev
pnpm build     # build library + this document into dist/
pnpm typecheck # TypeScript check without building
```

The source of this document is
[`docs/spv-toolpack.md`]({{RAW}}/docs/spv-toolpack.md); the build stamps in the version
and rewrites the source links to point at the release tag.
