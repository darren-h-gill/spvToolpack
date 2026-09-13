/**
 * Date conversion utilities for SpvFormControl
 *
 * SharePoint stores all dates as ISO 8601 UTC strings, e.g. "2026-06-08T00:00:00Z".
 * HTML date/datetime-local inputs work in the user's LOCAL timezone.
 *
 * The golden rule: full timezone conversion both ways, for BOTH date-only and
 * datetime fields, defaulting to the browser's timezone when none is given.
 *
 * Date-only fields are NOT necessarily literal midnight UTC. SharePoint's own
 * UI (and flows/CSOM code that doesn't explicitly force UTC) writes a "Date
 * Only" value as midnight in the site's regional time zone, converted to UTC
 * — so a UK site can produce "2026-06-07T23:00:00Z" for what a user picked as
 * "8 June 2026" whenever BST (UTC+1) is in effect. Treating that string as a
 * literal UTC date label (a naive substring) then renders the wrong (previous)
 * day for exactly half the year. Converting through the target timezone
 * instead — the same approach already used for datetime fields — reads back
 * the calendar day the user actually picked, in both BST and GMT.
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
 * Convert an SP ISO UTC string to a value suitable for <input type="date">,
 * in the given timezone (defaults to browser timezone).
 *
 * e.g. "2026-06-07T23:00:00Z" (midnight BST on 8 June) in Europe/London → "2026-06-08"
 */
export function isoToDateInput(
  iso: string | null | undefined,
  timezone?: string
): string {
  if (!iso) return ''
  const tz = timezone ?? getBrowserTimezone()
  const d  = new Date(iso)

  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year:     'numeric',
    month:    '2-digit',
    day:      '2-digit',
  }).formatToParts(d)

  const p: Record<string, string> = {}
  parts.forEach(({ type, value }) => { p[type] = value })

  return `${p.year}-${p.month}-${p.day}`
}

/**
 * Convert a date input value ("YYYY-MM-DD") to an SP ISO UTC string,
 * representing midnight in the given timezone (defaults to browser timezone).
 *
 * e.g. "2026-06-08" in Europe/London (BST) → "2026-06-07T23:00:00Z"
 */
export function dateInputToIso(
  dateStr: string,
  timezone?: string
): string | null {
  if (!dateStr) return null
  // Midnight local time, converted to UTC the same way a datetime-local
  // input is — reuses the same DST-safe offset math for both control types.
  return dateTimeInputToIso(`${dateStr}T00:00`, timezone)
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
