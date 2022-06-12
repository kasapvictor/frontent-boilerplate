import '../scss/styles.scss';

// import { answer } from './answer';

// console.log(`the answer is ${answer()}`);

interface $Params {
  selector: string;
  scope?: ParentNode | Document;
}

export const $ = <T extends HTMLElement>({ selector, scope = document }: $Params): T | null =>
  scope.querySelector(selector);

// 2
// export const $ = <T>({ selector, scope = document }: $Params): T => scope.querySelector(selector);

const app = $({ selector: '#app' });
if (app) {
  app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
}

const app1 = $({ selector: '#app1' });
if (app1) {
  app1.innerHTML = `
  <h1>Page1</h1>
`;
}

const app2 = $({ selector: '#app2' });
if (app2) {
  app2.innerHTML = `
  <h1>Page2</h1>
`;
}
