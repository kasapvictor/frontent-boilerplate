const parseFeeds = (document) => {
  const titleEl = document.querySelector('title');
  const title = titleEl.textContent;

  const descriptionEl = document.querySelector('description');
  const description = descriptionEl.textContent;

  const items = document.querySelectorAll('item');
  const posts = [...items].map((item) => {
    const itemTitleEl = item.querySelector('title');
    const itemTitle = itemTitleEl.textContent;

    const itemDescriptionEl = item.querySelector('description');
    const itemDescription = itemDescriptionEl.textContent;

    const itemLinkEl = item.querySelector('link');
    const itemLink = itemLinkEl.textContent;

    return { title: itemTitle, description: itemDescription, link: itemLink };
  });

  return { title, description, posts };
};

export default (content) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(content, 'application/xml');
  const hasError = document.querySelector('parsererror');

  return hasError ? false : parseFeeds(document);
};
