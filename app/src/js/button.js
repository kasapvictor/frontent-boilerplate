export const button = (text = 'My button') => {
  const el = document.createElement('button');
  el.textContent = `${text}`;
  return el;
};
