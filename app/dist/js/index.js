const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var styles = /* @__PURE__ */ (() => ":root {\n  --color1: #2c3e50;\n  --color2: tomato;\n}\n\n#app, #app1, #app2 {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  text-align: center;\n  color: var(--color2);\n  margin-top: 60px;\n  display: grid;\n  transition: all 0.5s;\n  user-select: none;\n  background: linear-gradient(to bottom, white, black);\n}")();
const $ = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const app = $("#app");
if (app) {
  app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
}
const app1 = $("#app1");
if (app1) {
  app1.innerHTML = `
  <h1>Page1</h1>
`;
}
const app2 = $("#app2");
if (app2) {
  app2.innerHTML = `
  <h1>Page2</h1>
`;
}
