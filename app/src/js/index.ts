import '../scss/styles.scss';
import image3 from '../img/image3.png';
import stylesModule from './image3.module.scss';

import { Button } from './components';

Button({ containerName: 'container__button', text: 'My Button!!!' });

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
  <a href="https://vitejs.dev/guide/features.html" class="link" target="_blank">Documentation</a>
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

const img3 = $({ selector: '#image3' });
if (img3) {
  const img = document.createElement('img');
  img.src = image3;
  img.className = stylesModule.image3;
  img3.append(img);
}
