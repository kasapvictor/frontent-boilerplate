import isEmpty from 'lodash/isEmpty';
import validate from '../utils/validate';
import getRss from '../api/getRss';

export default (e, form, elements, watchedState, i18nInstance) => {
  e.preventDefault();

  const state = watchedState;
  const formData = new FormData(form);

  // FILL FIELDS VALUES OF STATE
  Object.entries(elements.fields).forEach(([name, element]) => {
    state.form.fields[name] = formData.get(name).trim();
  });

  // ERRORS
  const process = validate(state.form.fields, state.urls, i18nInstance);
  process
    .then((data) => {
      state.form.process.info = data;
      state.form.valid = isEmpty(data);
    })
    .then(() => {
      if (!state.form.valid) {
        state.form.process.status = 'error';
      }

      // AXIOS GET DATA OF LINK
      if (state.form.valid) {
        const { url } = state.form.fields;
        getRss(state, i18nInstance, url);
      }
    });

  console.log('state', state);
};
