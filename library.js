'use strict'
//TMDB API

const API_KEY = 'd960477bf098eed6c42f45d8345afc0b'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`

//important
// fetch(API_URL, {
//   method: 'POST',
//   headers: { 'Content-type': 'application/JSON' },
//   body: JSON.stringify({
//     name: 'User 1',
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log('SUCCCES')
//     } else {
//       console.log('Not Success')
//     }
//     return res.json()
//   })
//   .then((data) => console.log(data))

const tvShows = document.querySelector('.tv__shows')
const moviesReal = document.querySelector('.real_movies')
const headerDetails = document.querySelector('.movie__details')
const bg = document.querySelector('.movieDesc')

//fetch
fetch(API_URL)
  .then((res) => {
    if (res.ok) {
      console.log('SUCCCES')
    } else {
      console.log('Not Success')
    }
    return res.json()
  })
  .then((data) => {
    console.log(data.results)
    const alls = data.results
    //DISPLAYING MOVIES
    const displayMovies = function (
      classes,
      cover,
      title,
      genre,
      year,
      rating
    ) {
      return ` <div class="${classes}">
    <div class="movie__poster">
      <img src="https://image.tmdb.org/t/p/w500/${cover}" alt="" class="post" />
    </div>
    <div class="movie__infos">
      <h3 class="title__movie">${title}</h3>
      <p class="genre_movie">${genre}</p>
      <p class="genre_movie year">${new Date(year).getFullYear()}</p>
      <div class="rating">${` <i class="fas fa-star"></i>`.repeat(rating)}
       
      </div>
    </div>
  </div>`
    }
    const tvShowsFilter = alls.sort((a, b) => a.vote_average - b.vote_average)

    tvShowsFilter.forEach((shows) => {
      tvShows.insertAdjacentHTML(
        'beforeend',
        displayMovies(
          'movies',
          shows.poster_path,
          shows.title,
          shows.original_language,
          shows.release_date,
          shows.vote_average
        )
      )
      moviesReal.insertAdjacentHTML(
        'beforeend',
        displayMovies(
          'movies real__movies',
          shows.poster_path,
          shows.title,
          shows.original_language,
          shows.release_date,
          shows.vote_average
        )
      )
    })
    const allMovies = document.querySelectorAll('.movies')

    allMovies.forEach((mov) => {
      mov.addEventListener('click', function () {
        headerDetails.textContent = ''
        const MVP = alls.find(
          (movie) =>
            movie.title ===
            mov.closest('.movies').querySelector('.title__movie').textContent
        )
        const html = ` <div class="genres">
    <div class="genre">${MVP.original_language}</div>
   
  </div>
  <div class="movie__title">${MVP.title}</div>
  <div class="movie__description">
  ${MVP.overview}
  </div>
  <div class="notes">
  <div class="rating">${` <i class="fas fa-star"></i>`.repeat(MVP.vote_average)}
  </div>`
        bg.style.background = `url('https://image.tmdb.org/t/p/w500/${MVP.backdrop_path}')`
        headerDetails.insertAdjacentHTML('beforeend', html)
      })
    })
  })
