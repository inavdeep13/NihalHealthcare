import { blogsGrid } from './components/blogs/blogsGrid'
import { blogHero } from './components/blogs/blogsHero'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import './style.css'


document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${blogHero()}

    ${blogsGrid(null, false, false)}

  </main>

  ${footer()}

`

footerAnimation()