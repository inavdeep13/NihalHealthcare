import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import { timeline } from './components/timeline/timeline'
import { timelineAnimation } from './components/timeline/timelineAnimation'
import { timelineHero } from './components/timeline/timelineHero'
import './style.css'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'



document.querySelector("#app").innerHTML = `

  ${navbar()}

  ${timelineHero()}

  ${timeline()}

  ${footer()}

  ${whatsappButton()}

`

navbarAnimation()
navbarFunctionality()

timelineAnimation()

footerAnimation()
whatsappButtonFunctionality()