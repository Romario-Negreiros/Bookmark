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

/* Features section tabs */
const tabsNavLinks = Array.from(
  document.querySelectorAll('#features .nav-link')
)
const tabs = Array.from(document.querySelectorAll('.tab'))

tabsNavLinks.forEach((tabNavLink, tabNavLinkIndex) => {
  tabNavLink.addEventListener('click', event => {
    event.preventDefault()

    tabs.forEach((tab, tabIndex) => {
      if (tab.classList.contains('active')) {
        tab.classList.remove('active')
      }

      if (tabIndex === tabNavLinkIndex) {
        tab.classList.add('active')
      }
    })

    tabsNavLinks.forEach(tabNavLink2 => {
      if (tabNavLink2.classList.contains('active')) {
        tabNavLink2.classList.remove('active')
        tabNavLink2.removeAttribute('aria-selected')
      }
    })

    event.target.classList.add('active')
    event.target.setAttribute('aria-selected', 'true')
  })
})

/* Form validation */
const form = document.querySelector('.needs-validation')

form.addEventListener(
  'submit',
  event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }
)
