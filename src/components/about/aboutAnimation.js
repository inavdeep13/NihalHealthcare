import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const aboutAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    const tl = gsap.timeline({

      scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
      }

    })

    tl.from(".about-image", {

      scale: 1.2,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",

    })

    .from(".about-title", {

      y: 80,
      opacity: 0,
      duration: 1,

    }, "-=0.7")

    .from(".about-desc", {

      y: 40,
      opacity: 0,
      duration: 0.8,

    }, "-=0.5")

  }

}