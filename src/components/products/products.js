import { productsData } from './productsData'

export const products = () => {

  return `

    <section class="products-section py-12 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Section Header -->

        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

          <div>

            <span class="text-cyan-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              Our Products
            </span>

            <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">

              Advanced Syringe Solutions For Modern Healthcare

            </h2>

          </div>

        </div>

        <!-- Products Grid -->

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          ${productsData.map(product => `

            <a
              href="${product.link}"
              class="product-card group bg-stone-50 border border-slate-200 rounded-[24px] md:rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >

              <!-- Image -->
              <div class="overflow-hidden">

                <img
                  src="${product.image}"
                  alt="${product.title}"
                  class="w-full h-[240px] sm:h-[280px] object-cover group-hover:scale-110 transition-all duration-700"
                />

              </div>

              <!-- Content -->
              <div class="p-6 sm:p-8">

                <h3 class="text-xl sm:text-2xl font-bold text-slate-900">

                  ${product.title}

                </h3>

                <p class="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">

                  ${product.desc}

                </p>

                <!-- Button -->
                <div class="mt-6 sm:mt-8">

                  <span
                    class="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-500 text-white px-5 sm:px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  >

                    Explore Product

                  </span>

                </div>

              </div>

            </a>

          `).join('')}

        </div>

      </div>

    </section>

  `

}