import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { BASE_URL } from './config.js';
import { FAKE_USER_URL } from './config.js';
import { getJSON } from './helpers.js';
import { post } from './helpers.js';
import { API_KEY } from './config.js';
import 'core-js/stable';

export const state = {
  movies: {},
  movieById: {},
  users: {},
  search: {
    query: '',
    results: {},
  },
};

export const loadMovies = async function () {
  try {
    const data = await getJSON(API_URL);

    state.movies = data.results.map((movie) => {
      return {
        title: movie.title ?? movie.name,
        desc: movie.overview,
        poster: movie.poster_path,
        release: movie.release_date ?? movie.first_air_date,
        genre: movie.genre_ids,
        id: movie.id,
        popularity: movie.popularity,
        note: movie.vote_average,
        backgroundImage: movie.backdrop_path,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const loadUsers = async function () {
  try {
    const data = await getJSON(FAKE_USER_URL, post);
    state.users = {
      username: data.username,
      password: data.password,
    };
  } catch (err) {
    throw err;
  }
};

export const findMovies = async function (id) {
  try {
    const data = await getJSON(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

    state.movieById = {
      title: data.title ?? data.name,
      desc: data.overview,
      poster: data.poster_path,
      release: data.release_date ?? data.first_air_date,
      genre: data.genres,
      id: data.id,
      popularity: data.popularity,
      note: data.vote_average,
      backgroundImage: data.backdrop_path,
    };
  } catch (err) {
    throw err;
  }
};

export const searchMovies = async function (query) {
  try {
    const data = await getJSON(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );

    state.search.results = data.results.map((movie) => {
      return {
        title: movie.title ?? movie.name,
        desc: movie.overview,
        poster: movie.poster_path,
        release: movie.release_date ?? movie.first_air_date,
        genre: movie.genre_ids,
        id: movie.id,
        popularity: movie.popularity,
        note: movie.vote_average,
        backgroundImage: movie.backdrop_path,
      };
    });
  } catch (err) {
    throw err;
  }
};
