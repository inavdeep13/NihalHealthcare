import aboutImage from '../../assets/images/about.jpg'

export const about = () => {

  return `

    <section class="about-section py-20 md:py-24 lg:py-28 bg-stone-50 overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <!-- Image -->
          <div class="relative">

            <!-- Main Image -->
            <div class="overflow-hidden rounded-[30px] lg:rounded-[40px] shadow-2xl border border-slate-200">

              <img
                src="${aboutImage}"
                alt="Nihal Healthcare Manufacturing"
                class="about-image w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
              />

            </div>

          </div>

          <!-- Content -->
          <div>

            <!-- Small Heading -->
            <span class="text-cyan-500 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

              About Nihal Healthcare

            </span>

            <!-- Main Heading -->
            <h2 class="about-title mt-4 text-3xl sm:text-4xl font-bold leading-[1.1] text-slate-900">

              Precision Manufacturing For Safer Healthcare Solutions

            </h2>

            <!-- Description -->
            <p class="about-desc mt-6 text-base text-slate-600 leading-relaxed">

              Nihal Healthcare is engaged in manufacturing and supplying sterile medical disposables including hypodermic syringes, needles, infusion sets, and insulin syringes while maintaining global healthcare quality standards.

            </p>

            <p class="mt-5 text-base text-slate-600 leading-relaxed">

              Established in 2007, the company operates with highly automated manufacturing systems, clean room production facilities, and advanced quality assurance processes certified under EN ISO 13485 standards.

            </p>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-5 mt-10">

              <!-- Stat -->
              <div class="bg-white border border-slate-200 rounded-3xl p-6">

                <h3 class="text-2xl font-extrabold text-slate-900">
                  2007
                </h3>

                <p class="mt-2 text-slate-600 text-xs">
                  Established
                </p>

              </div>

              <!-- Stat -->
              <div class="bg-white border border-slate-200 rounded-3xl p-6">

                <h3 class="text-2xl font-extrabold text-slate-900">
                  ISO
                </h3>

                <p class="mt-2 text-slate-600 text-xs">
                  13485 Certified
                </p>

              </div>

              <!-- Stat -->
              <div class="bg-white border border-slate-200 rounded-3xl p-6">

                <h3 class="text-2xl font-extrabold text-slate-900">
                  7+
                </h3>

                <p class="mt-2 text-slate-600 text-xs">
                  Syringe Sizes
                </p>

              </div>

              <!-- Stat -->
              <div class="bg-white border border-slate-200 rounded-3xl p-6">

                <h3 class="text-2xl font-extrabold text-slate-900">
                  Global
                </h3>

                <p class="mt-2 text-slate-600 text-xs">
                  Supply Standards
                </p>

              </div>

            </div>

            <!-- Button -->
            <div class="mt-6">

              <a
                href="/about.html"
                class="inline-flex items-center justify-center bg-slate-900 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >

                Learn More

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  `

}