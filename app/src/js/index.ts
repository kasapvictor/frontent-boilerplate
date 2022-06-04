import '../scss/styles.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import image from '../images/image.jpeg';

import { Button } from './components';
import HomePage from './pages/home';

Button({ containerName: 'container__button', text: 'My Button!!' });

HomePage();

console.log('check eslint');

const imgFomrJs = document.querySelector('.image-from-js');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
imgFomrJs.innerHTML = `<img src="${image}" alt="pl1">`;
