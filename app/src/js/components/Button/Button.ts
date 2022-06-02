import * as styles from './button.module.scss';
import { ButtonProps } from './types';

const Button = ({ containerName, text }: ButtonProps): void => {
  const button = document.createElement('button');
  button.innerText = text;
  button.className = styles.button;

  const container = document.querySelector(`.${containerName}`);
  if (container) {
    container.innerHTML = '';
    container.append(button);
  }
};

export default Button;
