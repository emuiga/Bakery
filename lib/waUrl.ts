/**
 * Build a safe wa.me URL from a phone number string.
 * Strips +, spaces, dashes. Returns null if phone is missing/invalid.
 */
export function waUrl(phone: string | undefined | null, message: string): string | null {
  if (!phone || phone === "undefined" || phone === "null") return null;
  const clean = phone.replace(/[\s\-\(\)\+]/g, "");
  if (!clean || clean.length < 7) return null;
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
