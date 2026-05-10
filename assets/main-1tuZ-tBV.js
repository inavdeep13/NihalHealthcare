import{n as e,t}from"./footer-8f2YvWVC.js";import{n,t as r}from"./ScrollTrigger-EMptDItP.js";import{n as i,t as a}from"./footerAnimation-D_hHAbqi.js";import{t as o}from"./navbarFunctionality-DOBpbzkB.js";import{n as s,t as c}from"./productsAnimation-DMrNOJJh.js";import{n as l,t as u}from"./certificationsAnimations-BKJpgbRg.js";import{t as d}from"./about-aD9cy8g_.js";var f=`/NihalHealthcare/assets/hero-1-DP918TK8.jpg`,p=`/NihalHealthcare/assets/hero-2-DwOaF9jL.avif`,m=`/NihalHealthcare/assets/hero-3-ejHO0v_v.avif`,h=`/NihalHealthcare/assets/hero-4-DLpmizSW.jpg`,g=()=>`

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
                href="./products.html"
                class="inline-flex items-center justify-center bg-slate-900 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Explore Products
              </a>

              <a
                href="./contact.html"
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
                src="${f}"
                alt="Healthcare"
                class="w-full h-[350px] sm:h-[450px] object-cover transition-all duration-700"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  `,_=()=>{n.timeline().from(`.hero-title`,{y:100,opacity:0,duration:1,ease:`power4.out`}).from(`.hero-desc`,{y:40,opacity:0,duration:.8},`-=0.5`).from(`#hero-image`,{scale:1.2,opacity:0,duration:1.2,ease:`power4.out`},`-=0.8`)},v=()=>{let e=document.querySelector(`#hero-image`),t=[f,p,m,h],n=0;setInterval(()=>{n++,n>=t.length&&(n=0),e.style.opacity=0,setTimeout(()=>{e.src=t[n],e.style.opacity=1},300)},2e3)},y=[{id:1,image:`/NihalHealthcare/assets/leader-1-nUYi6Nzd.jpg`,name:`Mr. Gurbhej Singh`,designation:`Managing Director`},{id:2,image:`/NihalHealthcare/assets/leader-2-CPPvHj1A.jpg`,name:`Mr. Harpeet Singh`,designation:`Managing Director`},{id:3,image:`/NihalHealthcare/assets/leader-3-BNV6kXhw.jpg`,name:`Mr. K.S Arya`,designation:`Plant Head / MR`}],b=()=>`

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

          ${y.map((e,t)=>`

            <div
              class="leader-card relative flex flex-col items-center text-center px-8 py-10"
            >

              <!-- Border -->
              ${t===y.length-1?``:`

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

  `;n.registerPlugin(r);var x=()=>{window.innerWidth>=1024&&n.from(`.leader-card`,{y:80,opacity:0,stagger:.2,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.leadership-section`,start:`top 75%`}})},S=[{id:1,image:`/NihalHealthcare/assets/client-1-BmBI487x.jpg`,name:`Dr. Amit Sharma`,designation:`Healthcare Distributor`,review:`Nihal Healthcare consistently delivers high-quality sterile syringe solutions with exceptional manufacturing precision and dependable service standards.`},{id:2,image:`/NihalHealthcare/assets/client-2-Al0pPLX0.jpg`,name:`Rajiv Mehta`,designation:`Medical Supply Partner`,review:`Their commitment to healthcare quality, sterile production, and timely supply chain management makes them a trusted manufacturing partner.`},{id:3,image:`/NihalHealthcare/assets/client-3-STMOKSvt.jpg`,name:`Dr. Neha Kapoor`,designation:`Hospital Procurement`,review:`The product quality, packaging standards, and consistency maintained by Nihal Healthcare have been excellent throughout our collaboration.`}],C=()=>`

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

          ${S.map(e=>`

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

  `;n.registerPlugin(r);var w=()=>{window.innerWidth>=1024&&n.from(`.testimonial-card`,{y:80,opacity:20,stagger:.2,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.testimonials-section`,start:`top 75%`}})},T=()=>`

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
            href="./contact.html"
            class="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
          >

            Contact Us

          </a>

          <!-- Quote Button -->
          <!-- <a
            href="/contact.html"
            class="inline-flex items-center justify-center border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
          >

            Request Quote

          </a> -->

        </div>

      </div>

    </section>

  `;n.registerPlugin(r);var E=()=>{window.innerWidth>=1024&&n.from(`.contact-cta-title`,{y:80,opacity:0,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.contact-cta-section`,start:`top 75%`}})},D=()=>`

    <section class="
      py-20
      md:py-28
      bg-stone-50
      overflow-hidden
    ">

      <div class="
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        <div class="
          grid
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        ">

          <!-- IMAGE -->
          <div>

            <div class="
              rounded-[32px]
              overflow-hidden
              bg-white
            ">

              <img
                src="${d}"
                alt="About Nihal Healthcare"
                class="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  lg:h-[550px]
                  object-cover
                "
              />

            </div>

          </div>

          <!-- CONTENT -->
          <div>

            <span class="
              text-cyan-500
              font-semibold
              uppercase
              tracking-[0.2em]
              text-xs
              sm:text-sm
            ">

              About Us

            </span>

            <h2 class="
              mt-5
              text-4xl
              md:text-5xl
              font-extrabold
              text-slate-900
              leading-tight
            ">

              Precision Manufacturing For Modern Healthcare

            </h2>

            <p class="
              mt-6
              text-slate-600
              text-base
              md:text-lg
              leading-relaxed
            ">

              Nihal Healthcare specializes in sterile
              medical disposable manufacturing with
              advanced production standards, certified
              quality systems, and healthcare-focused
              innovation.

            </p>

            <!-- HIGHLIGHTS -->
            <div class="
              mt-10
              grid
              sm:grid-cols-2
              gap-5
            ">

              <div class="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
              ">

                <h3 class="
                  text-3xl
                  font-extrabold
                  text-cyan-500
                ">

                  ISO

                </h3>

                <p class="
                  mt-2
                  text-slate-600
                ">

                  Certified Manufacturing

                </p>

              </div>

              <div class="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
              ">

                <h3 class="
                  text-3xl
                  font-extrabold
                  text-cyan-500
                ">

                  Sterile

                </h3>

                <p class="
                  mt-2
                  text-slate-600
                ">

                  Medical Disposable Solutions

                </p>

              </div>

            </div>

            <!-- BUTTON -->
            <div class="mt-10">

              <a
                href="./about.html"
                class="
                  inline-flex
                  items-center
                  gap-3
                  bg-slate-900
                  hover:bg-cyan-500
                  text-white
                  px-7
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >

                Read More

                <span>→</span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  `,O=()=>`

    <section class="
      feedback-section
      py-20
      bg-stone-50
      overflow-hidden
    ">

      <div class="
        max-w-4xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        <!-- HEADING -->
        <div class="
          text-center
          max-w-3xl
          mx-auto
        ">

          <span class="
            text-cyan-500
            font-semibold
            uppercase
            tracking-[0.2em]
            text-xs
            sm:text-sm
          ">

            Quick Feedback

          </span>

          <h2 class="
            mt-5
            text-4xl
            font-bold
            text-slate-900
            leading-tight
          ">

            Share Your Healthcare Experience

          </h2>

          <p class="
            mt-6
            text-slate-600
            text-base
            leading-relaxed
          ">

            Your feedback helps Nihal Healthcare
            improve healthcare manufacturing,
            product quality, and customer experience.

          </p>

        </div>

        <!-- FORM -->
        <div class="mt-14">

          <form class="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-6
            md:p-10
            shadow-sm
          ">

            <!-- TOP GRID -->
            <div class="
              grid
              md:grid-cols-2
              gap-5
            ">

              <!-- NAME -->
              <div>

                <input
                  type="text"
                  placeholder="Your Name"
                  class="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-stone-50
                    outline-none
                    focus:border-cyan-500
                    transition-all
                    duration-300
                  "
                />

              </div>

              <!-- EMAIL -->
              <div>

                <input
                  type="email"
                  placeholder="Your Email"
                  class="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-stone-50
                    outline-none
                    focus:border-cyan-500
                    transition-all
                    duration-300
                  "
                />

              </div>

            </div>

            <!-- RATING -->
<div class="mt-8">

  <p class="
    text-sm
    font-semibold
    text-slate-700
  ">

    Rate Your Experience

  </p>

  <div class="
    mt-4
    flex
    items-center
    gap-3
    star-rating
  ">

    ${[1,2,3,4,5].map((e,t)=>`

      <button
        type="button"
        class="
          rating-star
          text-4xl
          text-slate-300
          hover:text-yellow-400
          transition-all
          duration-300
        "
        data-rating="${t+1}"
      >

        ★

      </button>

    `).join(``)}

  </div>

</div>

            <!-- CATEGORY -->
            <div class="mt-8">

              <p class="
                text-sm
                font-semibold
                text-slate-700
              ">

                Feedback Category

              </p>

              <div class="
                mt-4
                flex
                flex-wrap
                gap-3
              ">

               ${[`Products`,`Manufacturing`,`Quality`,`Support`].map(e=>`

  <button
    type="button"
    class="
      feedback-option
      px-5
      py-3
      rounded-full
      border
      border-slate-200
      bg-stone-50
      text-slate-700
      hover:bg-slate-900
      hover:text-white
      transition-all
      duration-300
      text-sm
      font-medium
    "
  >

    ${e}

  </button>

`).join(``)}

              </div>

            </div>

            <!-- QUICK TAGS -->
            <div class="mt-8">

              <p class="
                text-sm
                font-semibold
                text-slate-700
              ">

                Select Feedback

              </p>

              <div class="
                mt-4
                flex
                flex-wrap
                gap-3
              ">
${[`Excellent Quality`,`Fast Support`,`Trusted Products`,`Professional Team`].map(e=>`

  <button
    type="button"
    class="
      feedback-tag
      px-5
      py-3
      rounded-full
      text-slate-700
      hover:bg-slate-900
      hover:text-white
      border
      border-transparent
      transition-all
      duration-300
      text-sm
      font-medium
    "
  >

    ${e}

  </button>

`).join(``)}

              </div>

            </div>

            <!-- MESSAGE -->
            <div class="mt-8">

              <textarea
                rows="3"
                placeholder="Additional feedback..."
                class="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-stone-50
                  outline-none
                  resize-none
                  focus:border-cyan-500
                  transition-all
                  duration-300
                "
              ></textarea>

            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              class="
                mt-8
                w-full
                bg-slate-900
                hover:bg-cyan-500
                text-white
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
              "
            >

              Submit Feedback

            </button>

          </form>

        </div>

      </div>

    </section>

  `,k=()=>{let e=document.querySelectorAll(`.rating-star`);e.forEach((t,n)=>{t.addEventListener(`click`,()=>{e.forEach((e,t)=>{t<=n?(e.classList.remove(`text-slate-300`),e.classList.add(`text-yellow-400`)):(e.classList.remove(`text-yellow-400`),e.classList.add(`text-slate-300`))})})});let t=document.querySelectorAll(`.feedback-option`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>{e.classList.remove(`bg-slate-900`,`text-white`),e.classList.add(`bg-stone-50`,`text-slate-700`)}),e.classList.remove(`bg-stone-50`,`text-slate-700`),e.classList.add(`bg-slate-900`,`text-white`)})}),document.querySelectorAll(`.feedback-tag`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.toggle(`bg-cyan-500`),e.classList.toggle(`text-white`),e.classList.toggle(`bg-cyan-50`),e.classList.toggle(`text-cyan-600`)})})};document.querySelector(`#app`).innerHTML=`
  ${e()}
  ${g()}
  ${s()}
  ${D()}
  ${b()}
  ${C()}
  ${l(3,!0,!0)}
  ${T()}
  ${O()}
  ${t()}
`,i(),o(),v(),_(),v(),c(),x(),w(),u(),E(),a(),k();