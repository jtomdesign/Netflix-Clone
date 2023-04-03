import * as model from '../js/model.js';
import showForm from './views/showFormViews.js';
import validForm from './views/validForm.js';
import trendingViews from './views/trendingViews.js';
import moviesView from './views/moviesView.js';
import displayMovies from './views/displayMovies.js';
import defaultCover from './views/defaultCover.js';

if (module.hot) {
  module.hot.accept();
}

const loadMovies = async function () {
  try {
    moviesView.spinnerLoad();
    trendingViews.spinnerLoad();

    await model.loadMovies();
    moviesView.render(model.state.movies);
    trendingViews.render(model.state.movies);
  } catch (err) {
    console.log(err);
  }
};

const getSingleMovie = async function (id) {
  try {
    displayMovies.spinnerLoad();
    await model.findMovies(`${id}`);
    displayMovies.render(model.state.movieById);
    defaultCover.render(model.state.movieById);
  } catch (err) {
    console.log(err);
  }
};

const controlUser = async function () {
  try {
    //loader
    validForm.spinnerLoad();

    //load data user
    await model.loadUsers();

    //valid form and login
    validForm.render(model.state.users);
    validForm.checkValidInput();

    loadMovies();
    getSingleMovie('297762');
  } catch (err) {
    console.log(err);
  }
};

const searchResults = async function () {
  try {
    await model.searchMovies('wonder woman');
    console.log(model.state.search.results);
  } catch (err) {
    throw err;
  }
};
searchResults();

const init = function () {
  displayMovies.addHandlerMovie(getSingleMovie);
  validForm.addHanlerFormValid(controlUser);
  showForm.addHandlerForm();
};
init();
