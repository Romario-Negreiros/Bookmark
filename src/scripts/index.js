const navToggler = document.querySelector('.navbar-toggler')
const navTogglerIcon = document.querySelector('.navbar-toggler img')
const navbarBrandImage = document.querySelector('.navbar-brand')

navToggler.addEventListener('click', event => {
  if (event.currentTarget.classList.contains('collapsed')) {
    navbarBrandImage.classList.remove('switch-brand-image')
    navTogglerIcon.src = 'src/assets/icon-hamburger.svg'
    window.document.body.classList.remove('mobile-menu-active')
    return
  }
  navbarBrandImage.classList.add('switch-brand-image')
  navTogglerIcon.src = 'src/assets/icon-close.svg'
  window.document.body.classList.add('mobile-menu-active')
})