export default (e, elements, watchedState) => {
	const {target: el} = e;
	const state = watchedState;
	const {viewedPostsIds} = state.ui;
	
	if (el.dataset.postId) {
		const {postId: id} = el.dataset;
		const hasViewedId = viewedPostsIds.includes(id);
		
		if (!hasViewedId) {
			state.ui.viewedPostsIds = [...viewedPostsIds, id];
		}
		
		if (el.tagName === 'BUTTON') {
			state.ui.modal.renderId = id;
		}
	}
};
