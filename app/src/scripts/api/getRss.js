import parse from '../utils/parse';
import api from './api';
import uniqWith from 'lodash/uniqWith';

const toFillingStateFeeds = (watchState, newFeed) => {
	const state = watchState;
	const feeds = [...state.feeds, newFeed];
	const mergedFeeds = uniqWith(feeds, (prev, curr) => {
		if (prev.title === curr.title) {
			const current = curr;
			current.description = prev.description;
			current.posts = prev.posts;
			return true;
		}
		return false;
	});
	
	state.feeds = mergedFeeds;
	return true;
};

export default (watchedState, i18nInstance, url) => {
	const state = watchedState;
	
	api(url)
		.then((response) => {
			state.form.process.status = 'sending';
			return response.data.contents;
		})
		.then((content) => {
			const rssContent = parse(content);
			
			if (!rssContent) {
				state.form.process.info = i18nInstance.t('errors.rss');
				state.form.process.status = 'error';
			}
			
			if (rssContent) {
				toFillingStateFeeds(state, rssContent);
				state.urls = [...state.urls, url];
				state.form.process.status = 'sent';
				state.form.process.info = i18nInstance.t('network.success.rss');
			}
		})
		.catch((err) => {
			if (err.request) {
				state.form.process.info = i18nInstance.t('network.error.request');
			} else {
				state.form.process.info = i18nInstance.t('network.error.default');
			}
			state.form.process.status = 'error';
			throw err;
		});
}
