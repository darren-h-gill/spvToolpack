# spvToolpack — SharePoint Vue

A Vue 3 component library built for applications that work with **SharePoint REST API / OData** data. Components are purpose-designed to bind directly to SharePoint list field values, handling the data transformations that SharePoint requires (ISO date formatting, decimal percentages, field type conventions) so your application code doesn't have to.

Built with TypeScript and distributed as a **UMD bundle** for use via CDN `<script>` tag, as well as an ES module for bundler-based projects.

---

## Prerequisites

spvToolpack does **not** bundle Bootstrap or Vue — they must be loaded globally before the library is used. This is intentional: in SharePoint-hosted pages and SPFx-free scenarios, these libraries are typically already available.

Load the following via CDN before using spvToolpack:

```html
<!-- Bootstrap 5.3 CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

<!-- Font Awesome 5 (used for control type icons) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<!-- Bootstrap 5.3 JS bundle (required for Modal, Toast, Offcanvas) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>

<!-- spvToolpack -->
<script src="path/to/spv-toolpack.umd.js"></script>
```

---

## Installation as a Vue plugin

```js
const app = Vue.createApp({ /* ... */ })
app.use(spvToolpack)
app.mount('#app')
```

All components are registered globally and available immediately:

```html
<SpvFormControl sp-type="Text" v-model="item.Title" label="Title" />
```

---

## SpvFormControl

The centrepiece of the library. A single component that renders the appropriate HTML control for any SharePoint field type, with all data transformations handled internally.

### The core principle

`v-model` is always bound to the **SharePoint-format value** — the value as SharePoint stores and returns it via the REST API. The component converts to and from whatever display format the HTML control requires.

```html
<!-- modelValue is always the SP REST API value -->
<SpvFormControl
  sp-type="DateTime"
  v-model="item.DueDate"
  label="Due Date"
/>
<!-- item.DueDate holds "2026-06-08T00:00:00Z" — the control shows a date picker -->
```

### `spType` prop — SharePoint field types

The `spType` prop accepts the SharePoint REST API `TypeAsString` value for the field. This determines how the control behaves and what defaults are applied.

| `spType` | Default control | Notes |
|---|---|---|
| `Text` | Text input | `maxlength` defaults to 255 (SP limit) |
| `Note` | Textarea | No maxlength |
| `Number` | Number input | |
| `Currency` | Currency input | Locale-formatted |
| `DateTime` | Date picker | See date handling below |
| `Boolean` | Switch | |
| `Choice` | Select | Pass options via `options` prop |
| `MultiChoice` | Checkboxes | Emits array of strings |
| `Lookup` | Select | Single lookup |
| `LookupMulti` | Multi-select | Emits array of `{Id, Title}` |
| `User` | Select | Single person |
| `UserMulti` | Multi-select | Multiple people |

### `type` prop — override the rendered control

When the SharePoint field type and your desired display differ, set `type` explicitly. The most common case is a SharePoint `Number` field that you want to display as a percentage:

```html
<!-- SP stores 0.8, control displays 80 and emits 0.8 -->
<SpvFormControl
  sp-type="Number"
  type="percent"
  v-model="item.CompletionRate"
  label="Completion Rate"
/>
```

### Date and DateTime handling

SharePoint stores all dates as ISO 8601 UTC strings (e.g. `"2026-06-08T00:00:00Z"`). Naively converting these to local time causes the classic **"wrong day" bug** — a date stored as midnight UTC appears as the previous evening in timezones ahead of UTC (e.g. UK BST, Central European Time).

spvToolpack handles this correctly:

- **Date-only fields** (`type="date"`): the date portion is extracted directly from the ISO string with no timezone conversion. `"2026-06-08T00:00:00Z"` always displays as 8 June, regardless of the user's timezone.
- **DateTime fields** (`type="datetime-local"`): full timezone-aware conversion both ways. The display value is shown in the user's local timezone (or an explicit override), and saved back to UTC ISO format.

```html
<!-- DateTime — converts to/from browser local timezone automatically -->
<SpvFormControl sp-type="DateTime" type="datetime-local" v-model="item.MeetingTime" label="Meeting Time" />

<!-- DateTime — explicit timezone override -->
<SpvFormControl sp-type="DateTime" type="datetime-local" timezone="America/New_York" v-model="item.MeetingTime" label="Meeting Time (NY)" />
```

The `timezone` prop accepts any [IANA timezone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). When omitted, the browser's local timezone is used automatically.

### Common props

| Prop | Type | Description |
|---|---|---|
| `spType` | `SpType` | SharePoint field TypeAsString |
| `type` | `FormControlType` | Override the rendered control type |
| `v-model` | — | Always the SP-format value |
| `label` | `string` | Label rendered above the control |
| `labelClass` | `string` | Additional CSS classes for the label |
| `required` | `boolean` | Shows a presence indicator (green/red asterisk) |
| `readonly` | `boolean` | Renders the control as read-only |
| `placeholder` | `string` | Input placeholder text |
| `suppressPrefixIcon` | `boolean` | Hides the Font Awesome type icon |
| `timezone` | `string` | IANA timezone for DateTime controls |
| `min` / `max` | `number` \| `string` | Min/max constraints |

### Form validation

Each `SpvFormControl` exposes a `requiredPass` property for lightweight form validation without a form library:

```js
const titleRef = ref(null)
const isValid = computed(() => titleRef.value?.requiredPass ?? true)
```

```html
<SpvFormControl ref="titleRef" sp-type="Text" v-model="item.Title" label="Title" required />
<button :disabled="!isValid">Save</button>
```

---

## General UI components

The library also includes general-purpose Bootstrap wrapper components:

| Component | Description |
|---|---|
| `SpvAlert` | Dismissible alert with variant colours. `v-model` controls visibility. |
| `SpvModal` | Bootstrap modal dialog. `v-model` controls open/close state. |
| `SpvToast` | Bootstrap toast notification. `v-model` controls show/hide. |
| `SpvOffcanvas` | Bootstrap offcanvas panel. `v-model` controls open/close state. |
| `SpvNavTabs` | Tab navigation. `v-model` binds the active tab key. |

---

## Development

```bash
pnpm install
pnpm dev       # start dev playground
pnpm build     # build library to dist/
pnpm typecheck # TypeScript check without building
```

Output files:
- `dist/spv-toolpack.umd.js` — UMD bundle for CDN / script tag use
- `dist/spv-toolpack.es.js` — ES module for bundler projects
- `dist/index.d.ts` — TypeScript declarations
