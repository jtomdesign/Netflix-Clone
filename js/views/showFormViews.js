import View from './views.js';
class ShowForm extends View {
  _parentElement = document.querySelector('.form');
  _signBtn = document.querySelector('.sign__btn');
  _welcomeInfos = document.querySelector('.welcome__infos');

  addHandlerForm() {
    this._signBtn.addEventListener('click', this._showLoginForm.bind(this));
  }

  _showLoginForm() {
    this._parentElement.classList.toggle('hide__items');

    if (this._parentElement.classList.contains('hide__items')) {
      this._signBtn.innerHTML =
        '  <i class="fas fa-sign-in-alt    "></i> Sign In';
      this._welcomeInfos.classList.remove('hide__items');
    }

    if (!this._parentElement.classList.contains('hide__items')) {
      this._signBtn.innerHTML = ' <i class="fas fa-times    "></i> Close';
      this._welcomeInfos.classList.add('hide__items');
    }
  }
}
export default new ShowForm();
