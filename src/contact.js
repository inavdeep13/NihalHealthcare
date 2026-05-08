import { contactPage } from './components/contact/contactPage'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import './style.css'


document.querySelector("#app").innerHTML = `

  ${navbar()}

  ${contactPage()}


`

navbarAnimation()
navbarFunctionality()

contactAnimation()