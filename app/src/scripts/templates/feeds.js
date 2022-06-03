export default (feeds, i18nInstance) => {
  const items = feeds
    .map((feed) => `
       <li class="list-group-item border-0 border-end-0">
         <h3 class="h6 m-0">${feed.title}</h3>
         <p class="m-0 small text-black-50">${feed.description}</p>
       </li>
    `).join('');

  return `
         <div class="card border-0">
           <div class="card-body">
             <h2 class="card-title h4">
               ${i18nInstance.t('ui.feeds.title')}
             </h2>
           </div>
           <ul class="list-group border-0 rounded-0">
             ${items}
           </ul>
         </div>
        `;
};
