import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { products } from './components/products/products'
import { productsAnimation } from './components/products/productsAnimation'
import './style.css'



document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main class="py-20">

    ${products()}

  </main>

  ${footer()}

`

navbarAnimation()
productsAnimation()
footerAnimation()