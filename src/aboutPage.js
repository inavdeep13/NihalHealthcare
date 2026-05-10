import './style.css'

import { navbar } from './components/navbar/navbar'

import { footer } from './components/footer/footer'

import { aboutHero } from './components/about/aboutHero'

import { aboutOverview } from './components/about/aboutOverview'

import { aboutMission } from './components/about/aboutMission'

import { aboutWhyUs } from './components/about/aboutWhyUs'

import { aboutCTA } from './components/about/aboutCTA'
import { aboutAnimation } from './components/about/aboutAnimation'

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main class="pt-20">

    ${aboutHero()}

    ${aboutOverview()}

    ${aboutMission()}

    ${aboutWhyUs()}

    ${aboutCTA()}

  </main>

  ${footer()}

`

aboutAnimation()