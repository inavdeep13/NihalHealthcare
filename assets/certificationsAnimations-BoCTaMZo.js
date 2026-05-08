import{n as e}from"./navbarAnimation-CrrQq9Zh.js";import{n as t}from"./footerAnimation-DjfdfhNg.js";var n=`/NihalHealthcare/assets/certificate-1-DZ_FKYtk.jpg`,r=`/NihalHealthcare/assets/certificate-2-fDzzzH5o.jpg`,i=`/NihalHealthcare/assets/certificate-3-tdOhh4f8.jpg`,a=[{title:`CE Certification`,desc:`European healthcare manufacturing compliance certification.`,image:n,file:`/NihalHealthcare/assets/551118%20-%20NIHAL%20HEALTHCARE%20-%20CERTIFICATE%20-%20englisch%20-%202025-04-07%20-%20MDR2017Q-BTzFblqy.pdf`},{title:`ISO 9001 Certification`,desc:`International quality management systems certification.`,image:r,file:`/NihalHealthcare/assets/ISO%209001-2015%20RENUAL%202023%20(1)-DERNB-ro.PDF`},{title:`GMP Certification`,desc:`Good Manufacturing Practice certified operations.`,image:i,file:`/NihalHealthcare/assets/icmed%2013485%20%20renewal-DZKG69oA.pdf`},{title:`BIS Licence`,desc:`Indian standards certification for syringe manufacturing.`,image:n,file:`/NihalHealthcare/assets/BIS%20LICENCE-D7z3pIG8.pdf`},{title:`EN ISO 13485`,desc:`Medical devices quality management certification.`,image:r,file:`/NihalHealthcare/assets/En%20ISO%2013485%20latestr-DSeHlwr5.PDF`},{title:`Drug Licence`,desc:`Certified healthcare manufacturing drug licence approval.`,image:i,file:`/NihalHealthcare/assets/NEW%20DRUG%20LICENCE-C0wTP-Lg.PDF`},{title:`GST Registration`,desc:`Official GST registration certification.`,image:n,file:`/NihalHealthcare/assets/GST%20-%20Copy-CO-8F2JU.PDF`}],o=(e=null,t=!1)=>`

    <section class="certifications-grid-section py-16 md:py-20 lg:py-24 bg-stone-50 overflow-hidden">

      <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

      ${t?`
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

      <div>

        <span class="text-cyan-500 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

          Certifications

        </span>

        <h2 class="mt-4 text-4xl font-extrabold text-slate-900 leading-tight">

          Certified Healthcare Manufacturing Standards

        </h2>

      </div>

      <a
        href="/certifications.html"
        class="
          inline-flex
          items-center
          gap-2
          text-slate-900
          font-semibold
          hover:text-cyan-500
          transition-all
          duration-300
        "
      >

        View All Certifications

        <span>→</span>

      </a>

    </div>
  `:``}

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          ${(e?a.slice(0,e):a).map(e=>`

            <a
              href="${e.file}"
              target="_blank"
              class="
                certification-card
                group
                bg-white
                border
                border-slate-200
                shadow-sm
                rounded-[24px]
                overflow-hidden
                hover:shadow-xl
                hover:border-cyan-300
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >

              <!-- Certificate Preview -->
              <div class="overflow-hidden bg-slate-100">

                <img
                  src="${e.image}"
                  alt="${e.title}"
                  class="
                    w-full
                    h-[200px]
                    sm:h-[220px]
                    object-contain
                    p-4
                    group-hover:scale-105
                    transition-all
                    duration-700
                  "
                />

              </div>

              <!-- Content -->
              <div class="p-5 md:p-6">

                <!-- Title -->
                <h3 class="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-slate-900
                  leading-tight
                ">

                  ${e.title}

                </h3>

                <!-- Description -->
                <p class="
                  mt-3
                  text-slate-600
                  text-sm
                  md:text-base
                  leading-relaxed
                ">

                  ${e.desc}

                </p>

                <!-- Button -->
                <div class="mt-6">

                  <span class="
                    inline-flex
                    items-center
                    justify-center
                    bg-slate-900
                    hover:bg-cyan-500
                    text-white
                    px-5
                    py-2.5
                    rounded-full
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                  ">

                    View Certificate

                  </span>

                </div>

              </div>

            </a>

          `).join(``)}

        </div>

      </div>

    </section>

  `;e.registerPlugin(t);var s=()=>{window.innerWidth>=1024&&e.utils.toArray(`.certification-card`).forEach((t,n)=>{e.from(t,{opacity:0,y:30,scale:.96,duration:.7,ease:`power2.out`,scrollTrigger:{trigger:t,start:`top 88%`}})})};export{o as n,s as t};