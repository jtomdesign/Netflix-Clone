import View from './views';

class defaultCover extends View {
  _parentElement = document.querySelector('.movie__details');
  _bg = document.querySelector('.movieDesc');

  _generateMarkup() {
    this._bg.style.background = `url('https://image.tmdb.org/t/p/w500${this._data.backgroundImage}')no-repeat center center/cover`;
    return ` 
      <div class="genres">
        ${this._data.genre.map(this._generateMarkupGenre).join('')}
      
      </div>
      <div class="movie__title">${this._data.title}</div>
      <div class="movie__description">
      ${this._data.desc}
      </div>
      <div class="notes">
      <div class="rating">${this._data.note.toFixed(1)}
      </div>`;
  }

  _generateMarkupGenre(genre) {
    return `<div class="genre">${genre.name}</div>`;
  }
}

export default new defaultCover();
