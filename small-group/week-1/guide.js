'use strict';
const selector = document.getElementById('version');
const link = document.getElementById('read-link');
const versionName = document.getElementById('version-name');

function updateLink() {
  const url = new URL(link.href);
  url.searchParams.set('version', selector.value);
  link.href = url.href;
  versionName.textContent = selector.value;
}
// Reset on fresh loads, including browsers that restore form values.
selector.value = 'NIV';
updateLink();
selector.addEventListener('change', updateLink);
