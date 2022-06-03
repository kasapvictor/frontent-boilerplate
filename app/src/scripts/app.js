import onChange from 'on-change';
import i18n from 'i18next';
import render from './view/render';
import formHandler from './controllers/form';
import postsHandler from './controllers/posts';
import resources from './locales/index';

export default () => {
  const elements = {
    form: document['form-search'],
    fields: {
      url: document.getElementById('url-input'),
    },
    submit: document.getElementById('submit'),
    message: document.querySelector('.text-danger'),
    posts: document.querySelector('.posts'),
    feeds: document.querySelector('.feeds'),
    modal: {
      title: document.querySelector('.modal-title'),
      body: document.querySelector('.modal-body'),
      link: document.querySelector('.full-article'),
    },
  };

  const state = {
    lng: 'ru',
    form: {
      valid: null,
      fields: {
        url: null,
      },
      process: {
        info: null,
        status: null,
      },
    },
    urls: [],
    feeds: [],
    ui: {
      viewedPostsIds: [],
      modal: {
        renderId: null,
      },
    },
  };

  const i18nInstance = i18n.createInstance();
  i18nInstance.init({
    lng: state.lng,
    debug: true,
    resources,
  });

  const { form: formEl, posts: postsEl } = elements;
  const watchedState = onChange(state, render(state, elements, i18nInstance));

  formEl.addEventListener('submit', (e) => formHandler(e, formEl, elements, watchedState, i18nInstance));
  postsEl.addEventListener('click', (e) => postsHandler(e, elements, watchedState));
};
