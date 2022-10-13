/*====Menu Show====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*====Active and remove Menu===========*/

const navlink = document.querySelectorAll('.nav__link')

function linkAction() {
    //active link
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove mobile menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click', linkAction))



/*===================Scroll Reveal Animation===================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*Scroll Home*/
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

/*About */
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

/*Skills */
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__data', { delay: 200 })
sr.reveal('.skills__img', { delay: 400 })

/*Work */
sr.reveal('.work__img', { interval: 200 })

/*Contact */
sr.reveal('.contact__input', { interval: 200 })