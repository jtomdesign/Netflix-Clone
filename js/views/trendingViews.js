import View from './views.js';
class TrendingViews extends View {
  _parentElement = document.querySelector('.tv__shows');

  _generateMarkup() {
    return this._data.map(this._generateMarkupTrending).join('');
  }

  _generateMarkupTrending(movie) {
    return `
    <a class="movies__link" data-id="${movie.id}">
    <div class="movies mmm" data-id="${movie.id}">
    <div class="movie__poster">
      <img
        src="https://image.tmdb.org/t/p/w500/${movie.poster.slice(1)}"
        alt=""
        class="post"
      />
      <div class="rating">
      ${movie.note.toFixed(1)}
      </div>
    </div>
    <div class="movie__infos">
      <h3 class="title__movie">${movie.title}</h3>
      <p class="genre_movie year">${new Date(movie.release).getFullYear()}</p>
    
    </div>
  </div>
    </a>
         
          `;
  }
}

export default new TrendingViews();
