export const content = new Map();

export class Poem {
  poem;

  constructor(slug, title) {
    this.title = title;
    this.slug = slug;
  }
}
export const createContentMap = function (contentList) {
  const contentArray = Array.from(contentList);
  contentArray.map(element => {
    const slug = element.querySelector('a').href.split('#')[1];
    const title = element.innerText;
    content.set(slug, new Poem(slug, title));
  });
};

const markdownToHTML = function (markdown) {
  return markdown.replace(/\n/gim, '<br>').trim();
};

const setThePoem = async function (poem, slug) {
  const obj = content.get(slug);
  obj.poem = markdownToHTML(poem);
  content.set(slug, obj);
};

export const fetchPoem = async function (slug) {
  try {
    const response = await fetch(`/poems/${slug}.md`);
    const poem = await response.text();
    return setThePoem(poem, slug);
  } catch (err) {
    console.log(err);
  }
};
