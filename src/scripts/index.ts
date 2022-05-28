import '../scss/styles.scss';

import { Button } from './components';
import HomePage from './pages/home';

Button({ containerName: 'container__button', text: 'My Button' });

HomePage();

console.log('check eslint');
