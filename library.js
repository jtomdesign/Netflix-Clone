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

// class Movies {
//   obj = []
//   constructor(title, genre, desc, rating, cover, year, type) {
//     this.title = title
//     this.genre = genre
//     this.desc = desc
//     this.rating = rating
//     this._cover = cover
//     this.year = year
//     this.type = type
//   }
// }
// const jumanji = new Movies(
//   'Jumanji',
//   'adventure comedie',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   5,
//   '/images/posters/jumanji.jpg',
//   '2019',
//   'movie'
// )
// const squid = new Movies(
//   'Squid Game',
//   'drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/squid-game.jpg',
//   '2022',
//   'serie'
// )
// const hisDark = new Movies(
//   'His Dark Material',
//   'Adventure',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   3,
//   '/images/posters/his-dark-material.jpg',
//   '2021',
//   'serie'
// )
// const under = new Movies(
//   '6 Underground',
//   'Adventure',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/6-underground.jpg',
//   '2017',
//   'movie'
// )
// const trois = new Movies(
//   '300',
//   'Drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   3,
//   '/images/posters/300.jpg',
//   '2015',
//   'movie'
// )
// const alice = new Movies(
//   'Alice',
//   'Drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/alice.jpg',
//   '2018',
//   'movie'
// )
// const stranger = new Movies(
//   'Stranger Things',
//   'Drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   5,
//   '/images/posters/stranger-things.jpg',
//   '2020',
//   'serie'
// )
// const raised = new Movies(
//   'Raised Wolves',
//   'Drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   3,
//   '/images/posters/raised-by-wolves.jpg',
//   '2020',
//   'serie'
// )
// const restless = new Movies(
//   'Restless',
//   'Action',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/restless.jpg',
//   '2022',
//   'serie'
// )
// const siren = new Movies(
//   'Siren',
//   'Drame romantic',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/siren.jpg',
//   '2022',
//   'serie'
// )
// const alien = new Movies(
//   'Alien',
//   'Drame romantic',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/alien.jpg',
//   '2021',
//   'movie'
// )
// const blackwidow = new Movies(
//   'Black Widow',
//   'Drame romantic',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/black-widow.jpg',
//   '2021',
//   'movie'
// )
// const aliens = new Movies(
//   'Aliens',
//   'Drame ',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/aliens.jpg',
//   '2022',
//   'serie'
// )
// const inter = new Movies(
//   'Interceptor',
//   'Drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/interception.jpg',
//   '2017',
//   'serie'
// )
// const doctor = new Movies(
//   'Doctor Strange',
//   'Drame romantic',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/doctor-strange.jpg',
//   '2020',
//   'movie'
// )
// const equilibre = new Movies(
//   'Equilibrium',
//   'Action',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/equilibrium.jpg',
//   '2000',
//   'serie'
// )
// const mortal = new Movies(
//   'Mortal Kombat',
//   'Action',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/mortal-kombat.jpg',
//   '2021',
//   'movie'
// )
// const guard = new Movies(
//   'Old Guard',
//   'Action',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/the-old-guard.jpg',
//   '2020',
//   'movie'
// )
// const joker = new Movies(
//   'Joker',
//   'drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   2,
//   '/images/posters/joker.jpg',
//   '2020',
//   'movie'
// )
// const valhalla = new Movies(
//   'Valhalla',
//   'drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   2,
//   '/images/posters/valhalla.jpg',
//   '2020',
//   'serie'
// )
// const supernatural = new Movies(
//   'Supernatural',
//   'drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   5,
//   '/images/posters/supernatural.jpg',
//   '2020',
//   'serie'
// )
// const tron = new Movies(
//   'Tron',
//   'drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   2,
//   '/images/posters/tron.jpg',
//   '2010',
//   'serie'
// )
// const hundred = new Movies(
//   'The 100',
//   'drame',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   2,
//   '/images/posters/the-100.jpg',
//   '2018',
//   'serie'
// )
// const adam = new Movies(
//   'The Adam Project',
//   'Action Sci-Fi',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/the-adam-project.jpg',
//   '2022',
//   'movie'
// )
// const spider = new Movies(
//   'Spider Home Coming',
//   'Action Sci-Fi',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/spider-man.jpg',
//   '2020',
//   'movie'
// )
// const lion = new Movies(
//   'The Lion King',
//   'Anime',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/the-lion-king.jpg',
//   '2020',
//   'movie'
// )
// const star = new Movies(
//   'Star Wars',
//   'Adventure',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   3,
//   '/images/posters/star-wars.jpg',
//   '2016',
//   'movie'
// )
// const gemini = new Movies(
//   'Gemini Man',
//   'Adventure',
//   "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
//   4,
//   '/images/posters/gemini-man.jpg',
//   '2016',
//   'movie'
// )

// const alls = [
//   jumanji,
//   squid,
//   hisDark,
//   under,
//   trois,
//   alice,
//   stranger,
//   raised,
//   restless,
//   siren,
//   alien,
//   aliens,
//   blackwidow,
//   equilibre,
//   mortal,
//   doctor,
//   guard,
//   joker,
//   valhalla,
//   supernatural,
//   tron,
//   hundred,
//   adam,
//   spider,
//   star,
//   lion,
//   gemini,
//   inter,
// ]
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
