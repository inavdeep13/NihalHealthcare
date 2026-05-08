import { leadershipData } from './leadershipData'

export const leadership = () => {

  return `

    <section class="leadership-section py-16 bg-[#f5f5f5] overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center mb-10">

          <span class="text-cyan-500 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

            Leadership

          </span>

          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">

            Thought Leaders

          </h2>

        </div>

        <!-- Leadership Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          ${leadershipData.map((leader, index) => `

            <div
              class="leader-card relative flex flex-col items-center text-center px-8 py-10"
            >

              <!-- Border -->
              ${index !== leadershipData.length - 1 ? `

                <div class="hidden xl:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-[220px] bg-slate-300"></div>

              ` : ''}

              <!-- Image -->
              <div class="w-[170px] h-[170px] rounded-full overflow-hidden border-4 border-white shadow-xl">

                <img
                  src="${leader.image}"
                  alt="${leader.name}"
                  class="w-full h-full object-cover"
                />

              </div>

              <!-- Name -->
              <h3 class="mt-8 text-2xl font-bold text-slate-900">

                ${leader.name}

              </h3>

              <!-- Designation -->
              <p class="mt-3 text-cyan-500 font-semibold text-sm uppercase tracking-wider">

                ${leader.designation}

              </p>

            </div>

          `).join('')}

        </div>

      </div>

    </section>

  `

}