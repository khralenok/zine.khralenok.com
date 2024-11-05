class Navigation {
  _navContainer = document.querySelector('nav');
  _previousBtn = document.getElementById('previous');
  _contentBtn = document.getElementById('content');
  _nextBtn = document.getElementById('next');
  contentItems = document.querySelectorAll('li');

  _blockButton(btn) {
    btn.removeAttribute('href');
    btn.classList.add('inactive');
  }

  _setButton(btn, slug) {
    btn.href = `#${slug}`;
    btn.classList.remove('inactive');
  }

  _highlightItem(slug) {
    this.contentItems.forEach(item => {
      const itemSlug = item.querySelector('a').href.split('#')[1];
      itemSlug === slug
        ? item.classList.add('active')
        : item.classList.remove('active');
    });
  }

  updateUI(slug, map) {
    const content = Array.from(map.keys());
    const previous = content.indexOf(slug) - 1;
    const next = content.indexOf(slug) + 1;
    // Update Previous button
    previous >= 0
      ? this._setButton(this._previousBtn, content[previous])
      : this._blockButton(this._previousBtn);
    // Update Next button
    next <= content.length - 1
      ? this._setButton(this._nextBtn, content[next])
      : this._blockButton(this._nextBtn);
    // Update Previous button
    this._highlightItem(slug);
    if (this._navContainer.classList.contains('active'))
      this._navContainer.classList.remove('active');
  }

  showContent() {
    this._navContainer.classList.toggle('active');
  }
}

export default new Navigation();
