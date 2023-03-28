export function makeStyleTag() {
  const tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('klink-ui-scroll-lock', '');

  return tag;
}
