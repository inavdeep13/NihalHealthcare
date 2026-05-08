import{t as e}from"./navbar-DT3jM947.js";import{n as t,t as n}from"./navbarAnimation-CrrQq9Zh.js";import{t as r}from"./navbarFunctionality-NzYVoFzi.js";import{n as i,t as a}from"./productsAnimation-CPaYLG6_.js";import{n as o,t as s}from"./footerAnimation-DjfdfhNg.js";import{t as c}from"./footer-D04efTuk.js";import{n as l,t as u}from"./certificationsAnimations-BoCTaMZo.js";var d=`/NihalHealthcare/assets/hero-1-DP918TK8.jpg`,f=`/NihalHealthcare/assets/hero-2-DwOaF9jL.avif`,p=`/NihalHealthcare/assets/hero-3-ejHO0v_v.avif`,m=`/NihalHealthcare/assets/hero-4-DLpmizSW.jpg`,h=()=>`

    <section class="hero-section relative overflow-hidden bg-stone-50 min-h-screen flex items-center pt-32 lg:pt-20">

      <!-- Background Glow -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">

        <div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <!-- Left Content -->
          <div class="text-center lg:text-left">

            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm mb-8">

              <span class="w-2 h-2 rounded-full bg-cyan-500"></span>

              <p class="text-sm font-semibold text-slate-700">
                Trusted Medical Syringe Manufacturer
              </p>

            </div>

            <!-- Heading -->
            <h1 class="hero-title text-3xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900">

              Precision Engineered Syringe Solutions For Modern Healthcare

            </h1>

            <!-- Paragraph -->
            <p class="hero-desc mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">

              Delivering high-quality sterile syringe solutions with advanced manufacturing standards, precision engineering, and trusted medical safety compliance.

            </p>

            <!-- Buttons -->
            <div class="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="#"
                class="inline-flex items-center justify-center bg-slate-900 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Explore Products
              </a>

              <a
                href="#"
                class="inline-flex items-center justify-center border border-slate-300 hover:border-cyan-500 hover:text-cyan-500 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Contact Us
              </a>

            </div>

          </div>

          <!-- Right Image -->
          <div class="relative">

            <!-- Main Image -->
            <div class="relative rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 bg-white">

              <img
                id="hero-image"
                src="${d}"
                alt="Healthcare"
                class="w-full h-[350px] sm:h-[450px] object-cover transition-all duration-700"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  `,g=()=>{t.timeline().from(`.hero-title`,{y:100,opacity:0,duration:1,ease:`power4.out`}).from(`.hero-desc`,{y:40,opacity:0,duration:.8},`-=0.5`).from(`#hero-image`,{scale:1.2,opacity:0,duration:1.2,ease:`power4.out`},`-=0.8`)},_=()=>{let e=document.querySelector(`#hero-image`),t=[d,f,p,m],n=0;setInterval(()=>{n++,n>=t.length&&(n=0),e.style.opacity=0,setTimeout(()=>{e.src=t[n],e.style.opacity=1},300)},2e3)},v=`/NihalHealthcare/assets/about-kNUGpdeN.jpg`,y=()=>`

    <section class="about-section py-20 md:py-24 lg:py-28 bg-stone-50 overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <!-- Image -->
          <div class="relative">

            <!-- Main Image -->
            <div class="overflow-hidden rounded-[30px] lg:rounded-[40px] shadow-2xl border border-slate-200">

              <img
                src="${v}"
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

  `;t.registerPlugin(o);var b=()=>{window.innerWidth>=1024&&t.timeline({scrollTrigger:{trigger:`.about-section`,start:`top 70%`}}).from(`.about-image`,{scale:1.2,opacity:0,duration:1.2,ease:`power4.out`}).from(`.about-title`,{y:80,opacity:0,duration:1},`-=0.7`).from(`.about-desc`,{y:40,opacity:0,duration:.8},`-=0.5`)},x=[{id:1,image:`/NihalHealthcare/assets/leader-1-nUYi6Nzd.jpg`,name:`Mr. Gurbhej Singh`,designation:`Managing Director`},{id:2,image:`/NihalHealthcare/assets/leader-2-CPPvHj1A.jpg`,name:`Mr. Harpeet Singh`,designation:`Managing Director`},{id:3,image:`/NihalHealthcare/assets/leader-3-BNV6kXhw.jpg`,name:`Mr. K.S Arya`,designation:`Plant Head / MR`}],S=()=>`

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

          ${x.map((e,t)=>`

            <div
              class="leader-card relative flex flex-col items-center text-center px-8 py-10"
            >

              <!-- Border -->
              ${t===x.length-1?``:`

                <div class="hidden xl:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-[220px] bg-slate-300"></div>

              `}

              <!-- Image -->
              <div class="w-[170px] h-[170px] rounded-full overflow-hidden border-4 border-white shadow-xl">

                <img
                  src="${e.image}"
                  alt="${e.name}"
                  class="w-full h-full object-cover"
                />

              </div>

              <!-- Name -->
              <h3 class="mt-8 text-2xl font-bold text-slate-900">

                ${e.name}

              </h3>

              <!-- Designation -->
              <p class="mt-3 text-cyan-500 font-semibold text-sm uppercase tracking-wider">

                ${e.designation}

              </p>

            </div>

          `).join(``)}

        </div>

      </div>

    </section>

  `;t.registerPlugin(o);var C=()=>{window.innerWidth>=1024&&t.from(`.leader-card`,{y:80,opacity:0,stagger:.2,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.leadership-section`,start:`top 75%`}})},w=[{id:1,image:`/NihalHealthcare/assets/client-1-BmBI487x.jpg`,name:`Dr. Amit Sharma`,designation:`Healthcare Distributor`,review:`Nihal Healthcare consistently delivers high-quality sterile syringe solutions with exceptional manufacturing precision and dependable service standards.`},{id:2,image:`/NihalHealthcare/assets/client-2-Al0pPLX0.jpg`,name:`Rajiv Mehta`,designation:`Medical Supply Partner`,review:`Their commitment to healthcare quality, sterile production, and timely supply chain management makes them a trusted manufacturing partner.`},{id:3,image:`/NihalHealthcare/assets/client-3-STMOKSvt.jpg`,name:`Dr. Neha Kapoor`,designation:`Hospital Procurement`,review:`The product quality, packaging standards, and consistency maintained by Nihal Healthcare have been excellent throughout our collaboration.`}],T=()=>`

    <section class="testimonials-section py-20 md:py-24 lg:py-28 bg-slate-900 overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center mb-14 md:mb-16">

          <span class="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

            Testimonials

          </span>

          <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">

            Trusted By Healthcare Professionals

          </h2>

        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          ${w.map(e=>`

            <div
              class="testimonial-card bg-white/5 border border-white/10 backdrop-blur-md rounded-[28px] p-6 sm:p-8 hover:bg-white/10 transition-all duration-500"
            >

              <!-- Quote Icon -->
              <div class="text-cyan-400 text-5xl font-bold leading-none">
                "
              </div>

              <!-- Review -->
              <p class="mt-5 text-slate-300 leading-relaxed text-sm sm:text-base">

                ${e.review}

              </p>

              <!-- Client -->
              <div class="mt-8 flex items-center gap-4">

                <!-- Image -->
                <div class="w-14 h-14 rounded-full overflow-hidden border border-white/10">

                  <img
                    src="${e.image}"
                    alt="${e.name}"
                    class="w-full h-full object-cover"
                  />

                </div>

                <!-- Info -->
                <div>

                  <h3 class="text-white font-bold text-base">

                    ${e.name}

                  </h3>

                  <p class="text-slate-400 text-sm mt-1">

                    ${e.designation}

                  </p>

                </div>

              </div>

            </div>

          `).join(``)}

        </div>

      </div>

    </section>

  `;t.registerPlugin(o);var E=()=>{window.innerWidth>=1024&&t.from(`.testimonial-card`,{y:80,opacity:20,stagger:.2,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.testimonials-section`,start:`top 75%`}})},D=()=>`

    <section class="contact-cta-section py-20 md:py-24 lg:py-28 bg-slate-900 overflow-hidden">

      <div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">

        <!-- Small Heading -->
        <span class="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

          Contact Us

        </span>

        <!-- Main Heading -->
        <h2 class="contact-cta-title mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">

          Looking For Trusted Healthcare Manufacturing Solutions?

        </h2>

        <!-- Description -->
        <p class="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">

          Connect with Nihal Healthcare for sterile syringe manufacturing, healthcare supply partnerships, product inquiries, and global distribution opportunities.

        </p>

        <!-- Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          <!-- Contact Button -->
          <a
            href="/contact.html"
            class="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
          >

            Contact Us

          </a>

          <!-- Quote Button -->
          <a
            href="/contact.html"
            class="inline-flex items-center justify-center border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
          >

            Request Quote

          </a>

        </div>

      </div>

    </section>

  `;t.registerPlugin(o);var O=()=>{window.innerWidth>=1024&&t.from(`.contact-cta-title`,{y:80,opacity:0,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.contact-cta-section`,start:`top 75%`}})};document.querySelector(`#app`).innerHTML=`
  ${e()}
  ${h()}
  ${i()}
  ${y()}
  ${S()}
  ${T()}
  ${l(3,!0)}
  ${D()}
  ${c()}
`,n(),r(),_(),g(),_(),a(),b(),C(),E(),u(),O(),s();