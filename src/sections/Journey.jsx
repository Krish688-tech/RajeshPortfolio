import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Journey() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".journey-label", {
      y: 25,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(".journey-line", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      }, "-=0.2")
      .from(".journey-content", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")
      .from(".journey-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      }, "-=0.3");
  }, { scope: container });

  return (
    <section id="journey" ref={container} className="relative overflow-hidden bg-[#0b0b0d] px-6 py-24 md:px-12 md:py-32 lg:px-[12%] lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="journey-label mb-14 flex items-center gap-4">
          <span className="text-xs font-semibold text-blue-400">06</span>
          <div className="h-px w-10 bg-white/30" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">The Real Story</span>
        </div>

        <div className="font-display leading-[0.88] tracking-wide">
          <div className="overflow-hidden">
            <h2 className="journey-line text-[14vw] md:text-[10vw] lg:text-[8rem]">NO FANCY</h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="journey-line text-[14vw] text-white/30 md:text-[10vw] lg:text-[8rem]">DEGREE.</h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="journey-line text-[14vw] md:text-[10vw] lg:text-[8rem]">JUST REAL</h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="journey-line text-[14vw] text-blue-400 md:text-[10vw] lg:text-[8rem]">PASSION.</h2>
          </div>
        </div>

        <div className="journey-content mt-14 max-w-3xl">
          <p className="text-lg leading-8 text-white/70 md:text-xl">
            I don't come from a traditional computer science background or a
            fancy technology degree. My journey has been different — I learned
            by building, experimenting, breaking things, fixing them, and
            continuously pushing myself to understand how technology really works.
          </p>

          <p className="mt-6 text-base leading-8 text-white/45">
            Today, I combine my knowledge of coding with modern AI tools to
            research faster, solve problems, explore ideas, build products,
            and turn concepts into working digital experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">

          <div className="journey-card rounded-2xl border border-white/10 bg-white/3 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">My Approach</span>

            <h3 className="mt-5 text-2xl font-bold text-white">CODE × AI</h3>

            <p className="mt-4 text-sm leading-7 text-white/45">
              I use AI as a development partner — not as a replacement for
              understanding. I bring the coding knowledge, architecture,
              logic, testing, debugging, and decision-making.
            </p>
          </div>

          <div className="journey-card rounded-2xl border border-blue-500/20 bg-blue-500/4 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/50">Tools I Work With</span>

            <h3 className="mt-5 text-2xl font-bold text-blue-300">AI WORKFLOW</h3>

            <p className="mt-4 text-sm leading-7 text-white/45">
              ChatGPT · Gemini · Kimi · Higgsfield AI · Google Flow ·
              Nano Banana and other AI-powered tools for development,
              research, creative work, automation, and problem solving.
            </p>
          </div>

          <div className="journey-card rounded-2xl border border-white/10 bg-white/3 p-6 md:p-8 md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">What I'm Building Now</span>

            <h3 className="mt-5 text-2xl font-bold text-white md:text-3xl">
              BUILDING BEYOND WEBSITES.
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/45 md:text-base">
              I'm currently working on an enterprise-level application built
              with Flutter. It's an ongoing process where I'm exploring
              application architecture, real-world workflows, backend systems,
              APIs, databases, automation, and AI-assisted development.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/70">
                Currently Building
              </span>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xl leading-9 text-white/60 md:text-2xl">
            "I may not have followed the traditional path into technology,
            but every project I build is another step forward."
          </p>
        </div>

      </div>
    </section>
  );
}

export default Journey;