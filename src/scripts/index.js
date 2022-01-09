async function load() {
  const page = await import('./pages/about');
  // Render page
  page.render();
}
load();

console.log('INDEX.JS');
