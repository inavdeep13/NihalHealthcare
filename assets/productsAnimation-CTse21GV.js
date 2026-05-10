import{n as e,t}from"./ScrollTrigger-Cnxg2fRR.js";import{n,r,t as i}from"./product-3-Ck0CcK37.js";var a=[{id:1,title:`Disposable Syringes`,desc:`High precision sterile disposable syringes manufactured with advanced healthcare safety standards.`,image:r,link:`./disposable-syringes.html`},{id:2,title:`Insulin Syringes`,desc:`Reliable insulin syringes delivering precision dosage and enhanced patient comfort.`,image:i,link:`./insulin-syringes.html`},{id:3,title:`Safety Syringes`,desc:`Engineered safety syringes designed for infection prevention and safe medical handling.`,image:n,link:`./safety-syringes.html`}],o=()=>`

    <section class="products-section py-20 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Section Header -->

        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">

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

          ${a.map(e=>`

            <a
              href="${e.link}"
              class="product-card group bg-stone-50 border border-slate-200 rounded-[24px] md:rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >

              <!-- Image -->
              <div class="overflow-hidden">

                <img
                  src="${e.image}"
                  alt="${e.title}"
                  class="w-full h-[240px] sm:h-[280px] object-cover group-hover:scale-110 transition-all duration-700"
                />

              </div>

              <!-- Content -->
              <div class="p-6 sm:p-8">

                <h3 class="text-xl sm:text-2xl font-bold text-slate-900">

                  ${e.title}

                </h3>

                <p class="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">

                  ${e.desc}

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

          `).join(``)}

        </div>

      </div>

    </section>

  `;e.registerPlugin(t);var s=()=>{window.innerWidth>=1024&&e.from(`.product-card`,{y:80,opacity:20,stagger:.2,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.products-section`,start:`top 75%`}})};export{o as n,s as t};