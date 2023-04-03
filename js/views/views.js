import icon from '../../images/loader.gif';
export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  spinnerLoad() {
    const markup = ` 
    <div class="preloader">
        <img src="${icon}" alt="loader" class="loader" />
    </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
