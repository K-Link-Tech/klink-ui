export function randomId() {
  return `klink-ui-${Math.random().toString(36).slice(2, 11)}`;
}
