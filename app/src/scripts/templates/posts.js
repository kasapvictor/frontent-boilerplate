const cls = {
  novisited: 'fw-bold',
  visited: 'link-secondary',
};

const items = (state, i18nInstance) => {
  const { feeds } = state;
  const { viewedPostsIds } = state.ui;

  return feeds
    .map((item, index) => item.posts
      .map((post, idx) => {
        const id = `${index}-${idx}`;
        const hasViewedId = viewedPostsIds.includes(id);
        const clsLink = cls[hasViewedId ? 'visited' : 'novisited'];

        return `
           <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0">
              <a href="${post.link}"
                 class="${clsLink}"
                 data-post-id="${id}"
                 target="_blank"
                 rel="noopener noreferrer">${post.title}
              </a>
             <button type="button"
                     class="btn btn-outline-primary btn-sm"
                     data-post-id="${id}"
                     data-bs-toggle="modal"
                     data-bs-target="#modal">
                     ${i18nInstance.t('ui.posts.button')}
             </button>
           </li>
        `;
      })
      .join(''))
    .join('');
};

export default (feeds, i18nInstance) => `
  <div class="card border-0">
    <div class="card-body">
      <h2 class="card-title h4">
        ${i18nInstance.t('ui.posts.title')}
      </h2>
    </div>
    <ul class="list-group border-0 rounded-0">
      ${items(feeds, i18nInstance)}
    </ul>
  </div>
`;
