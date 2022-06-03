import * as yup from 'yup';
import keyBy from 'lodash/keyBy';

const schema = (urls, i18nInstance) => yup.object().shape({
  url: yup
    .string()
    .url(i18nInstance.t('errors.url'))
    .notOneOf(urls, i18nInstance.t('errors.notOneOf'))
    .required(i18nInstance.t('errors.required')),
});

export default (fields, urls, i18nInstance) => schema(urls, i18nInstance)
  .validate(fields, { abortEarly: false })
  .then(() => null)
  .catch((err) => keyBy(err.inner, 'path'));
