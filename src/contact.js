import { contactPage } from './components/contact/contactPage'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import './style.css'


document.querySelector("#app").innerHTML = `

  ${navbar()}

  ${contactPage()}

  ${footer()}


`

navbarAnimation()
navbarFunctionality()
footerAnimation()

contactAnimation()