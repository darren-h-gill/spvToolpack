// Shared prop types for SpvFormControl and its internal components

// -----------------------------------------------------------------------------
// HTML control rendering type — what UI element to render
// -----------------------------------------------------------------------------
export type FormControlType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'percent'
  | 'currency'
  | 'date'
  | 'datetime-local'
  | 'color'
  | 'select'
  | 'checkboxes'
  | 'radio'
  | 'switch'
  | 'lookup'
  | 'lookupMulti'

// -----------------------------------------------------------------------------
// SharePoint field type — the actual data type stored in the SP list
// Values match SharePoint REST API TypeAsString property
// -----------------------------------------------------------------------------
export type SpType =
  | 'Text'           // Single line of text (max 255 chars)
  | 'Note'           // Multi-line text / rich text
  | 'Number'         // Numeric value
  | 'Currency'       // Currency (numeric, locale-formatted)
  | 'DateTime'       // Date or date+time
  | 'Boolean'        // Yes/No
  | 'Choice'         // Single choice from a defined list
  | 'MultiChoice'    // Multiple choices — stored as array of strings
  | 'Lookup'         // Single lookup to another list item
  | 'LookupMulti'    // Multiple lookups — stored as array of {Id, Title}
  | 'User'           // Single person/group
  | 'UserMulti'      // Multiple people/groups — stored as array
  | 'URL'            // Hyperlink or picture — stored as {Url, Description}
  | 'Calculated'     // Read-only calculated value
  | 'TaxonomyFieldType'       // Managed metadata — single term
  | 'TaxonomyFieldTypeMulti'  // Managed metadata — multiple terms

// -----------------------------------------------------------------------------
// Default FormControlType for each SpType.
// Used when the consumer does not explicitly set the `type` prop.
// The `type` prop always wins if provided — allowing overrides like
// spType="Number" type="percent" for decimal-stored percentage fields.
// -----------------------------------------------------------------------------
export const SP_TYPE_DEFAULTS: Record<SpType, FormControlType> = {
  Text:                     'text',
  Note:                     'textarea',
  Number:                   'number',
  Currency:                 'currency',
  DateTime:                 'date',          // time component controlled separately
  Boolean:                  'switch',
  Choice:                   'select',
  MultiChoice:              'checkboxes',
  Lookup:                   'select',
  LookupMulti:              'lookupMulti',
  User:                     'select',
  UserMulti:                'lookupMulti',
  URL:                      'text',          // specialised further later
  Calculated:               'text',          // always readonly
  TaxonomyFieldType:        'select',
  TaxonomyFieldTypeMulti:   'lookupMulti',
}

// -----------------------------------------------------------------------------
// Default maxlength per SpType (where applicable)
// -----------------------------------------------------------------------------
export const SP_TYPE_MAXLENGTH: Partial<Record<SpType, number>> = {
  Text: 255,   // SP enforces 255 char limit on single-line text fields
}

// -----------------------------------------------------------------------------
// Options / list items — shared across text (datalist), select, checkboxes, radio
// -----------------------------------------------------------------------------

/**
 * A single item in any options list.
 * Can be a plain string, a number, or a rich object (e.g. a SP lookup result).
 */
export type TListItem = string | number | Record<string, unknown>

/**
 * Tells the control how to extract a display string from a TListItem.
 *
 *   string   — the property name on the object to use, e.g. "Title"
 *   function — a custom formatter: (item) => string
 *
 * When omitted the control uses a smart fallback, trying common property
 * names in order before calling toString(). This handles typical SP objects
 * like { Id: 1, Title: "Something" } automatically with no config.
 */
export type OptionLabelResolver = string | ((item: TListItem) => string)

// -----------------------------------------------------------------------------
// Props shared by ALL internal control components
// -----------------------------------------------------------------------------
export interface SharedControlProps {
  id: string
  modelValue: unknown
  spType?: SpType
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
}

// -----------------------------------------------------------------------------
// Font Awesome icon name for each FormControlType
// -----------------------------------------------------------------------------
export const TYPE_ICON: Record<FormControlType, string> = {
  text:             'fa-font',
  textarea:         'fa-pen-fancy',
  number:           'fa-hashtag',
  percent:          'fa-percent',
  currency:         'fa-pound-sign',
  date:             'fa-calendar',
  'datetime-local': 'fa-clock',
  color:            'fa-palette',
  select:           'fa-list-ul',
  checkboxes:       'fa-check-double',
  radio:            'fa-dot-circle',
  switch:           '',
  lookup:           'fa-search',
  lookupMulti:      'fa-search-plus',
}
