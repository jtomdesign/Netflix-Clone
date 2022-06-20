'use strict'

const signBtn = document.querySelector('.sign__btn')
const form = document.querySelector('.form')
const welcomeInfos = document.querySelector('.welcome__infos')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputSubmit = document.querySelector('.submit')
const userName = document.querySelector('.user__name')

class Users {
  constructor(fullName, username, email, password) {
    this.fullName = fullName
    this.username = username
    this.email = email
    this.password = password
    signBtn.addEventListener('click', this.btnSign)
    inputSubmit.addEventListener('click', this.inputSubmit)
  }
  btnSign() {
    form.classList.toggle('hide__form')
    if (form.classList.contains('hide__form')) {
      welcomeInfos.style.opacity = '100'
      signBtn.textContent = 'Sign In'
    } else {
      welcomeInfos.style.opacity = '0'
      signBtn.textContent = 'Close'
    }
  }
  inputSubmit() {
    const findAcc = accounts.find((acc) => {
      return acc.username === inputEmail.value.toLowerCase()
    })
    if (
      inputEmail.value.toLowerCase() === findAcc.username &&
      +inputPassword.value === findAcc.password
    ) {
      window.location = '/bibliotheque.html'
      userName.textContent = findAcc.fullName
    } else if (+inputPassword.value !== findAcc.password) {
      console.log('wrong password')
    }
  }
}
const joel = new Users('Joel Tombo', 'joeltombo', 'jtom@gmail.com', 1111)
const dimitri = new Users('Dimitri Song', 'dimitri', 'dim@gmail.com', 2222)
const kito = new Users('Kito Kika', 'kito', 'kito@gmail.com', 3333)

const accounts = [joel, dimitri, kito]
