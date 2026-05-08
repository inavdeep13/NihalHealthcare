import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const leadershipAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    gsap.from(".leader-card", {

      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".leadership-section",
        start: "top 75%",
      },

    })

  }

}