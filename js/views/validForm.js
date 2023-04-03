import View from './views.js';

class ValidForm extends View {
  _parentElement = document.querySelector('.form');
  _inputUsername = document.querySelector('.input__username');
  _inputPassword = document.querySelector('.input__password');
  _homeContainer = document.querySelector('.home__container');
  _libraryContainer = document.querySelector('.library__container');

  _generateMarkup() {}

  addHanlerFormValid(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  checkValidInput() {
    if (this._inputUsername.value === '')
      throw new Error('Username is required');
    if (this._inputPassword.value === '')
      throw new Error('Password is required');
    if (this._inputPassword.value.length < 6)
      throw new Error('Your password is too short');

    if (
      !this._data.username === this._inputUsername.value &&
      this._data.password === this._inputPassword.value
    )
      return;
    this._homeContainer.classList.add('hide__container');
    this._libraryContainer.classList.remove('hide__container');
  }
}

export default new ValidForm();
