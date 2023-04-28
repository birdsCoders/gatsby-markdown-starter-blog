export function getPathname(str) {
  return str?.replace(/\s+/g, '-').toLowerCase();
}
