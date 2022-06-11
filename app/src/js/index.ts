import '../scss/styles.scss'

import { answer } from "./answer";

console.log(`the answer is ${answer()}`);

export const $ = <T>(selector: any, scope = document): T => {
  return scope.querySelector(selector);
}

const app: HTMLDivElement = $("#app");
if (app) {
  app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
}

const app1: HTMLDivElement = $("#app1");
if (app1) {
  app1.innerHTML = `
  <h1>Page1</h1>
`
}

const app2: HTMLDivElement = $("#app2");
if (app2) {
  app2.innerHTML = `
  <h1>Page2</h1>
`
}
