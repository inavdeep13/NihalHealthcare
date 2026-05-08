import{t as e}from"./navbar-DT3jM947.js";import{n as t,t as n}from"./navbarAnimation-CrrQq9Zh.js";import{t as r}from"./navbarFunctionality-NzYVoFzi.js";import{n as i,t as a}from"./footerAnimation-DjfdfhNg.js";import{t as o}from"./footer-D04efTuk.js";var s=[{year:`2007`,title:`Company Founded`,desc:`Nihal Healthcare was established with a mission to provide advanced sterile medical disposable products.`},{year:`2009`,title:`ISO 9001 Certification`,desc:`Achieved ISO 9001 certification to strengthen quality management systems.`},{year:`2010`,title:`International Expansion`,desc:`Expanded healthcare product supply across India and Brazil markets.`},{year:`2011`,title:`EN ISO 13485 & CE Certified`,desc:`Received international certifications for healthcare manufacturing excellence.`},{year:`2012`,title:`Contract Manufacturing`,desc:`Started manufacturing for Lifelong Meditech Gurgaon under export operations.`},{year:`2014`,title:`Government Supply Operations`,desc:`Started supplying products to Tamil Nadu Medical Services Corporation.`},{year:`2016`,title:`Expanded Product Portfolio`,desc:`Started manufacturing insulin syringes and IV infusion sets.`},{year:`2018 - 2023`,title:`Major Healthcare Supply Growth`,desc:`Supplied products to hospitals, pharma companies, and government healthcare sectors.`},{year:`2024`,title:`BIS Certification`,desc:`Achieved BIS mark certification as per IS 10258:2022 standards.`}],c=()=>`

    <section class="timeline-section py-20 md:py-24 lg:py-32 bg-stone-50 overflow-hidden">

      <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="relative">

          <!-- Center Line -->
          <div class="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            w-[2px]
            h-full
            bg-slate-200
            -translate-x-1/2
          "></div>

          <!-- Timeline Items -->
          <div class="space-y-16 md:space-y-28">

            ${s.map((e,t)=>`

              <div class="timeline-card relative">

                ${t%2==0?`
                    <!-- LEFT CARD -->
                    <div class="md:w-1/2 md:pr-16">

                      <div class="
                        group
                        bg-white
                        border
                        border-slate-200
                        rounded-[28px]
                        p-8 md:p-10
                        shadow-sm
                        hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                        hover:border-cyan-300
                        hover:-translate-y-1
                        transition-all
                        duration-500
                      ">

                        <!-- Year -->
                        <span class="
                          inline-flex
                          items-center
                          justify-center
                          bg-cyan-500
                          text-white
                          text-sm
                          font-bold
                          px-5
                          py-2
                          rounded-full
                        ">

                          ${e.year}

                        </span>

                        <!-- Title -->
                        <h3 class="
                          mt-6
                          text-2xl
                          md:text-3xl
                          font-bold
                          text-slate-900
                          leading-tight
                        ">

                          ${e.title}

                        </h3>

                        <!-- Description -->
                        <p class="
                          mt-5
                          text-slate-600
                          leading-relaxed
                          text-sm
                          sm:text-base
                        ">

                          ${e.desc}

                        </p>

                      </div>

                    </div>
                  `:`
                    <!-- RIGHT CARD -->
                    <div class="md:w-1/2 md:ml-auto md:pl-16">

                      <div class="
                        group
                        bg-white
                        border
                        border-slate-200
                        rounded-[28px]
                        p-8 md:p-10
                        shadow-sm
                        hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                        hover:border-cyan-300
                        hover:-translate-y-1
                        transition-all
                        duration-500
                      ">

                        <!-- Year -->
                        <span class="
                          inline-flex
                          items-center
                          justify-center
                          bg-cyan-500
                          text-white
                          text-sm
                          font-bold
                          px-5
                          py-2
                          rounded-full
                        ">

                          ${e.year}

                        </span>

                        <!-- Title -->
                        <h3 class="
                          mt-6
                          text-2xl
                          md:text-3xl
                          font-bold
                          text-slate-900
                          leading-tight
                        ">

                          ${e.title}

                        </h3>

                        <!-- Description -->
                        <p class="
                          mt-5
                          text-slate-600
                          leading-relaxed
                          text-sm
                          sm:text-base
                        ">

                          ${e.desc}

                        </p>

                      </div>

                    </div>
                  `}

                <!-- Center Dot -->
                <div class="
                  hidden
                  md:flex
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-6
                  h-6
                  rounded-full
                  bg-cyan-500
                  border-[5px]
                  border-stone-50
                  shadow-[0_0_20px_rgba(6,182,212,0.3)]
                "></div>

              </div>

            `).join(``)}

          </div>

        </div>

      </div>

    </section>

  `;t.registerPlugin(i);var l=()=>{window.innerWidth>=1024&&(t.from(`.history-hero h1`,{y:100,opacity:0,duration:1.2,ease:`power4.out`}),t.from(`.history-hero p`,{y:60,opacity:0,duration:1,delay:.3}),t.utils.toArray(`.timeline-card`).forEach((e,n)=>{t.from(e,{opacity:0,y:120,duration:1,ease:`power4.out`,scrollTrigger:{trigger:e,start:`top 85%`}})}))};document.querySelector(`#app`).innerHTML=`

  ${e()}

  ${c()}

  ${o()}

`,n(),r(),l(),a();