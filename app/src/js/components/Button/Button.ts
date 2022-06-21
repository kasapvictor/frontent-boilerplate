import { ButtonProps } from './types';

const buttonHandler = () => {
  // eslint-disable-next-line no-console
  console.log('Click test Button OK');
};

const Button = ({ containerName, text, cls = "" }: ButtonProps): void => {
  const button = document.createElement('button');
  button.innerText = text;
  button.classList.add(cls);

  button.addEventListener('click', buttonHandler);

  const container = document.querySelector(`.${containerName}`);
  if (container) {
    container.innerHTML = '';
    container.append(button);
  }
};

export default Button;
