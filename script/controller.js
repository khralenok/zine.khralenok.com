import * as model from './model.js';
import viewContent from './viewContent.js';
import viewNavigation from './viewNavigation.js';

const state = {
  curPoem: 'long-for-rain',
};

//Initial run
const init = function () {
  //Creating of a map
  model.createContentMap(viewNavigation.contentItems);
  //Rendering of first poem
  viewContent.renderPoem(state.curPoem, model.content);
  viewNavigation.updateUI(state.curPoem, model.content);
};

init();

document
  .querySelector('#content')
  .addEventListener('click', () => viewNavigation.showContent());

window.addEventListener('hashchange', function () {
  const newSlug = location.hash.slice(1);
  if (!model.content.has(newSlug)) return;

  viewContent.renderPoem(newSlug, model.content);
  state.curPoem = newSlug;
  viewNavigation.updateUI(newSlug, model.content);
});
