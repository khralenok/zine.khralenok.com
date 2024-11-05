import { fetchPoem } from './model.js';

class Content {
  _imageContainer = document.getElementById('image');
  _contentContainer = document.getElementById('text');

  _cleanView() {
    this._contentContainer.innerHTML = '';
    this._contentContainer.scrollTop = 0;
  }

  async renderPoem(slug, map) {
    const obj = map.get(slug);
    if (!obj.poem) await fetchPoem(slug);

    this._cleanView();

    //Switch illustration
    this._imageContainer.querySelector('img').src = `img/${slug}.svg`;

    //Render poem
    this._contentContainer.insertAdjacentHTML(
      'afterbegin',
      `<div class="content-wrapper"><h1 class="poem-title">${
        map.get(slug).title
      }</h1>
      <div class="poem-body">${map.get(slug).poem}
        </div></div>`
    );
  }
}

export default new Content();
