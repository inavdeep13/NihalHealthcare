import '../style.css'

import { navbar } from '../components/navbar/navbar'

import { footer } from '../components/footer/footer'

import { blogsData } from '../components/blogs/blogsData'

import { singleBlogHero } from '../components/blogs/singleBlogHero'

import { singleBlogContent } from '../components/blogs/singleBlogContent'

const blog = blogsData[1]

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${singleBlogHero(blog)}

    ${singleBlogContent(blog)}

  </main>

  ${footer()}

`