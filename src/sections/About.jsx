import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".about-label", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".about-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".about-content",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".about-photo",
          {
            y: 30,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <section id="about" ref={container} className="relative overflow-hidden bg-[#0b0b0d] px-6 py-16 md:px-12 md:py-20 lg:px-[12%] lg:py-20">

      <div className="pointer-events-none absolute left-[48%] top-[15%] h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[180px]" />

      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-100 w-100 rounded-full bg-purple-600/4 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="about-label mb-8 flex items-center gap-4 md:mb-10">
          <span className="text-xs font-semibold tracking-wider text-blue-400">02</span>
          <div className="h-px w-10 bg-white/25" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">About Me</span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          <div>

            <div className="font-display leading-[0.84] tracking-wide">

              <div className="overflow-hidden">
                <h2 className="about-line text-[14vw] md:text-[10vw] lg:text-[6.8rem] xl:text-[7.5rem]">
                  I DON'T JUST
                </h2>
              </div>

              <div className="overflow-hidden">
                <h2 className="about-line text-[14vw] text-white/25 md:text-[10vw] lg:text-[6.8rem] xl:text-[7.5rem]">
                  MARKET BRANDS.
                </h2>
              </div>

              <div className="overflow-hidden">
                <h2 className="about-line text-[14vw] md:text-[10vw] lg:text-[6.8rem] xl:text-[7.5rem]">
                  I BUILD THE
                </h2>
              </div>

              <div className="overflow-hidden">
                <h2 className="about-line text-[14vw] text-blue-400 md:text-[10vw] lg:text-[6.8rem] xl:text-[7.5rem]">
                  EXPERIENCE.
                </h2>
              </div>

            </div>

            <div className="about-content mt-6 max-w-xl">

              <p className="text-base leading-7 text-white/65 md:text-lg md:leading-8">
                I'm a freelance digital marketer and full-stack web developer
                focused on helping businesses build a strong digital presence.
                From attracting the right audience to building the website where
                they convert, I connect marketing and technology into one
                complete digital experience.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/35">
                Digital marketing · Social media · SEO · Paid advertising ·
                Creative strategy · UI design · Frontend · Backend ·
                Full-stack development
              </p>

            </div>

          </div>

          <div className="about-photo relative mx-auto w-full max-w-97.5 lg:max-w-105">

            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-blue-500/8 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111216]">

              <div className="aspect-4/5 overflow-hidden">
                <img
                  src="/images/rajex-profile.png"
                  alt="Rajesh"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-2.5 backdrop-blur-xl">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Available for projects
                </span>

              </div>

            </div>

            <div className="absolute -right-4 top-8 hidden rounded-full border border-white/10 bg-[#111216]/90 px-5 py-3 backdrop-blur-xl md:block">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Digital × Creative
              </span>
            </div>

          </div>

        </div>

      </div>

      <div className="pointer-events-none absolute bottom-0 left-[12%] right-[12%] h-px bg-white/10" />

    </section>
  );
}

export default About;