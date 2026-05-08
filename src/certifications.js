import { certificationsAnimation } from './components/certifications-page/certificationsAnimations'
import { certificationsGrid } from './components/certifications-page/certificationsGrid'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import './style.css'

document.querySelector("#app").innerHTML = `

  ${navbar()}
  ${certificationsGrid()}
  ${footer()}

`

navbarAnimation()
navbarFunctionality()

certificationsAnimation()

footerAnimation()