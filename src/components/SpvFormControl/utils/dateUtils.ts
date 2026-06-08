/**
 * Date conversion utilities for SpvFormControl
 *
 * SharePoint stores all dates as ISO 8601 UTC strings, e.g. "2026-06-08T00:00:00Z".
 * HTML date/datetime-local inputs work in the user's LOCAL timezone.
 *
 * The golden rule:
 *   - Date-only fields: no timezone conversion — SP uses midnight UTC as a
 *     "date label" with no time meaning. We just strip / restore the time part.
 *   - DateTime fields: full timezone conversion both ways.
 */

// ─── Timezone helpers ─────────────────────────────────────────────────────────

/** Returns the browser's IANA timezone string, e.g. "Europe/London" */
export function getBrowserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

/**
 * Returns the UTC offset in minutes for a given IANA timezone at a given instant.
 * Positive = behind UTC (e.g. "America/New_York" = +300), negative = ahead (e.g. "Europe/London" BST = -60).
 * Same sign convention as Date.prototype.getTimezoneOffset().
 */
function getOffsetMinutes(date: Date, tz: string): number {
  // Parse the date as both UTC and as local-in-tz, then diff
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
  const tzDate  = new Date(date.toLocaleString('en-US', { timeZone: tz }))
  return (utcDate.getTime() - tzDate.getTime()) / 60_000
}

// ─── Date-only (SP type: Date / DateTime with date-only rendering) ─────────────

/**
 * Convert an SP ISO string to a value suitable for <input type="date">.
 *
 * SP stores date-only fields as midnight UTC: "2026-06-08T00:00:00Z"
 * The date input expects: "2026-06-08"
 *
 * No timezone conversion — we simply extract the YYYY-MM-DD prefix.
 * This avoids the classic "wrong day" bug where UTC midnight renders as the
 * previous day in timezones ahead of UTC.
 */
export function isoToDateInput(iso: string | null | undefined): string {
  if (!iso) return ''
  // Just take the date portion — no timezone math needed for date-only fields
  return iso.substring(0, 10)
}

/**
 * Convert a date input value ("YYYY-MM-DD") to an SP ISO string.
 * Result is always midnight UTC — the SP convention for date-only fields.
 */
export function dateInputToIso(dateStr: string): string | null {
  if (!dateStr) return null
  return `${dateStr}T00:00:00Z`
}

// ─── DateTime (SP type: DateTime with time rendering) ─────────────────────────

/**
 * Convert an SP ISO UTC string to a value suitable for <input type="datetime-local">
 * in the given timezone (defaults to browser timezone).
 *
 * e.g. "2026-06-08T13:30:00Z" in Europe/London (BST) → "2026-06-08T14:30"
 */
export function isoToDateTimeInput(
  iso: string | null | undefined,
  timezone?: string
): string {
  if (!iso) return ''
  const tz = timezone ?? getBrowserTimezone()
  const d  = new Date(iso)

  // Format the UTC instant as a local date+time in the target timezone
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone:    tz,
    year:        'numeric',
    month:       '2-digit',
    day:         '2-digit',
    hour:        '2-digit',
    minute:      '2-digit',
    hour12:      false,
  }).formatToParts(d)

  const p: Record<string, string> = {}
  parts.forEach(({ type, value }) => { p[type] = value })

  // <input type="datetime-local"> expects "YYYY-MM-DDTHH:mm"
  // en-CA locale gives YYYY-MM-DD which makes assembly simple
  return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}`
}

/**
 * Convert a datetime-local input value ("YYYY-MM-DDTHH:mm", local time in the
 * given timezone) to an SP ISO UTC string.
 *
 * e.g. "2026-06-08T14:30" in Europe/London (BST) → "2026-06-08T13:30:00Z"
 */
export function dateTimeInputToIso(
  localStr: string,
  timezone?: string
): string | null {
  if (!localStr) return null
  const tz = timezone ?? getBrowserTimezone()

  // 1. Parse the input string AS IF it were UTC (by appending Z).
  //    "2026-06-08T14:30" → 14:30 UTC reference point.
  const asUtc = new Date(`${localStr}:00Z`)

  // 2. Find the UTC offset for this timezone at this approximate instant.
  //    For BST: getOffsetMinutes = -60 (60 minutes ahead of UTC)
  const offsetMinutes = getOffsetMinutes(asUtc, tz)

  // 3. Shift: the user entered 14:30 LOCAL; our asUtc is 14:30 UTC.
  //    Local is ahead by |offset|, so true UTC = 14:30 + offset (-60) = 13:30.
  const utc = new Date(asUtc.getTime() + offsetMinutes * 60_000)

  return utc.toISOString().replace(/\.\d{3}Z$/, 'Z')
}
