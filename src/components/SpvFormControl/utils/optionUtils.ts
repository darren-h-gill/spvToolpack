/**
 * Shared utilities for working with TListItem option arrays.
 *
 * Used by: FormControlText (datalist), and future select / checkboxes / radio controls.
 */
import type { TListItem, OptionLabelResolver } from '../types'

/**
 * Property names tried in order when resolving a label from an object and no
 * OptionLabelResolver is provided. Order is intentional — more specific/common
 * SP field names first.
 */
const LABEL_FALLBACK_PROPS = [
  'label', 'title', 'Title', 'name', 'Name',
  'caption', 'Caption', 'text', 'Text', 'display',
]

/**
 * Resolve the display string for a single TListItem.
 *
 * Priority:
 *   1. If the item is a string or number — return it directly.
 *   2. If a function resolver is provided — call it.
 *   3. If a string resolver is provided — use it as a property name.
 *   4. Smart fallback — try LABEL_FALLBACK_PROPS in order.
 *   5. Last resort — JSON.stringify to avoid "[object Object]".
 *
 * @example
 * resolveLabel("hello")                              // "hello"
 * resolveLabel({ Title: "Item A" })                  // "Item A"  (fallback)
 * resolveLabel({ code: "A", name: "Item A" }, "name") // "Item A" (property)
 * resolveLabel({ code: "A" }, item => item.code)     // "A"       (function)
 */
export function resolveLabel(item: TListItem, resolver?: OptionLabelResolver): string {
  // Primitives — no resolution needed
  if (typeof item === 'string') return item
  if (typeof item === 'number') return String(item)

  // Function resolver
  if (typeof resolver === 'function') return resolver(item)

  // Property name resolver
  if (typeof resolver === 'string') {
    const val = item[resolver]
    return val != null ? String(val) : ''
  }

  // Smart fallback — try common property names
  for (const prop of LABEL_FALLBACK_PROPS) {
    if (prop in item && item[prop] != null) return String(item[prop])
  }

  // Last resort — avoids "[object Object]"
  return JSON.stringify(item)
}

/**
 * Map an entire options array to display strings.
 * Convenience wrapper around resolveLabel for use in templates.
 */
export function resolveLabels(
  items: TListItem[],
  resolver?: OptionLabelResolver
): string[] {
  return items.map(item => resolveLabel(item, resolver))
}
