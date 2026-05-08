import './style.css'

import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'

import { hero } from './components/hero-section/hero'
import { heroAnimation } from './components/hero-section/heroAnimation'
import { imageSlider } from './components/hero-section/imageSlider'
import { products } from './components/products/products'
import { productsAnimation } from './components/products/productsAnimation'
import { about } from './components/about/about'
import { aboutAnimation } from './components/about/aboutAnimation'
import { leadership } from './components/leadership/leadership'
import { leadershipAnimation } from './components/leadership/leadershipAnimation'
import { testimonials } from './components/testimonials/testimonials'
import { testimonialsAnimation } from './components/testimonials/testimonialsAnimation'
import { contactCta } from './components/contactCta/contactCta'
import { contactCtaAnimation } from './components/contactCta/contactCtaAnimation'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { certificationsGrid } from './components/certifications-page/certificationsGrid'
import { certificationsAnimation } from './components/certifications-page/certificationsAnimations'

document.querySelector("#app").innerHTML = `
  ${navbar()}
  ${hero()}
  ${products()}
  ${about()}
  ${leadership()}
  ${testimonials()}
  ${certificationsGrid(3, true)}
  ${contactCta()}
  ${footer()}
`

navbarAnimation()
navbarFunctionality()
imageSlider()

heroAnimation() 
imageSlider()
productsAnimation()
aboutAnimation()
leadershipAnimation()
testimonialsAnimation()
certificationsAnimation()
contactCtaAnimation()
footerAnimation()