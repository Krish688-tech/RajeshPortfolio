import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-label", {
        y: 25,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-line",
          {
            yPercent: 110,
            duration: 1.1,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".hero-preview",
          {
            y: 30,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
          },
          "-=0.2",
        )
        .from(
          ".hero-floating-label",
          {
            y: 18,
            opacity: 0,
            scale: 0.96,
            duration: 0.65,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".hero-scroll",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        );

      // Gentle floating animation for the project cards
      gsap.to(".hero-float", {
        y: -9,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.35,
          from: "random",
        },
        delay: 2.5,
      });
    },
    {
      scope: container,
    },
  );

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen overflow-hidden bg-[#08080b]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/25 blur-[180px]" />

      {/* Purple Glow */}
      <div className="pointer-events-none absolute -bottom-37.5 right-[8%] h-112.5 w-112.5 rounded-full bg-purple-600/20 blur-[160px]" />

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen flex-col px-5 pb-8 pt-32 md:px-12 md:pt-32 lg:px-[12%] lg:pt-36">
        {/* Main Hero */}
        <div className="flex flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* LEFT SIDE */}
            <div className="relative z-20 max-w-3xl">
              {/* Availability */}
              <div className="hero-label mb-4 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 md:text-xs md:tracking-[0.3em]">
                  Available for Freelance Projects
                </span>
              </div>

              {/* Heading */}
              <div className="font-display leading-[0.82] tracking-wide">
                <div className="overflow-hidden">
                  <h1 className="hero-line text-[clamp(3.25rem,14vw,5rem)] md:text-[14vw] lg:text-[8rem]">
                    DIGITAL
                  </h1>
                </div>

                <div className="overflow-hidden">
                  <h1 className="hero-line text-[clamp(3.25rem,14vw,5rem)] md:text-[14vw] lg:text-[8rem]">
                    MARKETER
                  </h1>
                </div>

                <div className="overflow-hidden">
                  <h1 className="hero-line text-[clamp(3rem,12vw,4.5rem)] text-white/25 md:text-[14vw] lg:text-[8rem]">
                    &amp; BUILDER
                  </h1>
                </div>
              </div>

              {/* Description */}
              <p className="hero-description mt-6 max-w-md text-sm leading-7 text-white/65 md:text-base">
                I help businesses grow through digital marketing, creative
                strategy, and high-performing full-stack websites.
              </p>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-xs font-bold tracking-wider text-black transition-all duration-300 hover:scale-105 hover:bg-blue-400 md:px-8 md:py-4"
                >
                  VIEW MY WORK ↗
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-xs font-bold tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10 md:px-8 md:py-4"
                >
                  LET'S TALK →
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}

            {/* RIGHT SIDE — INTERACTIVE PROJECT SHOWCASE */}
            <div
              className="relative flex min-h-125 items-center justify-center px-1 pt-16 pb-16 sm:min-h-130 sm:px-0 sm:pt-0 sm:pb-0 lg:min-h-145"
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;

                gsap.to(
                  event.currentTarget.querySelectorAll(".hero-parallax"),
                  {
                    x: (index) => x * (index % 2 === 0 ? 12 : -12),
                    y: (index) => y * (index % 2 === 0 ? 9 : -9),
                    duration: 0.5,
                    ease: "power3.out",
                    overwrite: "auto",
                  },
                );
              }}
              onMouseLeave={(event) => {
                gsap.to(
                  event.currentTarget.querySelectorAll(".hero-parallax"),
                  {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    overwrite: "auto",
                  },
                );
              }}
            >
              {/* Ambient glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px] sm:h-96 sm:w-96" />

              {/* Decorative orbital rings */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full border border-blue-400/10 sm:h-110 sm:w-110" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-70 w-97.5 -translate-x-1/2 -translate-y-1/2 rotate-28 rounded-full border border-purple-400/10 sm:h-85 sm:w-122.5" />

              {/* MAIN YUKKON BROWSER PREVIEW */}
              <div className="hero-preview hero-parallax relative z-10 mt-4 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] shadow-[0_25px_100px_rgba(0,0,0,0.55)] lg:mt-0 lg:w-124 lg:max-w-none">
                {/* Browser top bar */}
                <div className="flex h-10 items-center gap-1.5 border-b border-white/10 bg-[#111113] px-3 md:h-12 md:gap-2 md:px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15 md:h-3 md:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15 md:h-3 md:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15 md:h-3 md:w-3" />

                  <div className="ml-2 flex h-6 flex-1 items-center rounded-md border border-white/5 bg-black/30 px-2.5 md:ml-4 md:h-7 md:px-3">
                    <span className="text-[8px] text-white/30 md:text-[9px]">
                      yukkonro.in
                    </span>
                  </div>
                </div>

                {/* Website mockup */}
                <div className="relative h-64 overflow-hidden bg-black sm:h-72 md:h-80 lg:h-87.5">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
                      backgroundSize: "50px 50px",
                    }}
                  />

                  <div className="relative flex items-center justify-between px-5 py-4 md:px-7 md:py-5">
                    <span className="font-display text-lg text-white md:text-xl">
                      YUKKON
                    </span>

                    <div className="hidden gap-4 md:flex">
                      <span className="text-[8px] text-white/30">PRODUCTS</span>
                      <span className="text-[8px] text-white/30">ABOUT</span>
                      <span className="text-[8px] text-white/30">CONTACT</span>
                    </div>
                  </div>

                  <div className="relative px-5 pt-5 md:px-7 md:pt-9">
                    <span className="text-[7px] uppercase tracking-[0.3em] text-blue-400 md:text-[8px]">
                      Smart Water Technology
                    </span>

                    <h3 className="mt-3 max-w-60 font-display text-4xl leading-[0.9] text-white/90 md:mt-4 md:max-w-75 md:text-5xl">
                      SMARTER
                      <br />
                      WATER.
                    </h3>

                    <p className="mt-4 max-w-55 text-[8px] leading-4 text-white/40 md:mt-5 md:max-w-65 md:text-[9px] md:leading-5">
                      Intelligent water level control designed for modern homes.
                    </p>

                    <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 md:mt-6 md:px-5">
                      <span className="text-[7px] font-bold text-black md:text-[8px]">
                        EXPLORE PRODUCT
                      </span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-20 -right-8 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />

                  <span className="absolute bottom-5 right-5 text-[9px] tracking-[0.3em] text-white/25">
                    01
                  </span>
                </div>
              </div>

              {/* FLOATING CARD 1 — MEHAA GARMENTS */}
              <div className="hero-floating-label hero-float hero-parallax absolute left-0 top-2 z-20 block w-[46%] rounded-xl border border-white/15 bg-[#11131c]/95 p-2 shadow-xl backdrop-blur-xl sm:left-0 sm:top-4 sm:w-44 sm:p-3 lg:-left-8 lg:top-8 lg:w-48">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-300/20 bg-emerald-400/10">
                    <span className="font-display text-lg text-emerald-300">
                      M.
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-white">
                      Mehaa Garments
                    </p>
                    <p className="mt-1 text-[9px] text-white/45">
                      Ecommerce Website
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
                  <span className="text-[9px] text-white/40">PROJECT 02</span>
                  <span className="text-xs text-emerald-300">↗</span>
                </div>
              </div>

              {/* FLOATING CARD 2 — GOOGLE ADS */}
              <div className="hero-floating-label hero-float hero-parallax absolute right-0 top-2 z-20 block w-[46%] rounded-xl border border-blue-300/20 bg-[#101522]/95 p-2 shadow-xl backdrop-blur-xl sm:right-0 sm:top-8 sm:w-44 sm:p-3 lg:-right-4 lg:top-12 lg:w-48">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
                    <span className="text-sm font-bold">G</span>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-white">
                      Google Ads
                    </p>
                    <p className="mt-0.5 text-[9px] text-white/45">
                      Campaign Strategy
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex h-8 items-end gap-1 border-b border-white/10 pb-1">
                  <span className="h-2 w-3 rounded-t bg-blue-400/40" />
                  <span className="h-4 w-3 rounded-t bg-blue-400/55" />
                  <span className="h-3 w-3 rounded-t bg-blue-400/65" />
                  <span className="h-6 w-3 rounded-t bg-blue-400/80" />
                  <span className="h-5 w-3 rounded-t bg-blue-400/60" />
                  <span className="ml-auto text-[9px] text-white/45">
                    Ads planning
                  </span>
                </div>
              </div>

              {/* FLOATING CARD 3 — SEO */}
              <div className="hero-floating-label hero-float hero-parallax absolute bottom-2 left-0 z-20 block w-[46%] rounded-xl border border-emerald-300/20 bg-[#0d1718]/95 p-2 shadow-xl backdrop-blur-xl sm:bottom-20 sm:left-0 sm:w-44 sm:p-3 lg:-left-10 lg:bottom-24 lg:w-48">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                    <span className="text-base">⌕</span>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-white">
                      SEO Growth
                    </p>
                    <p className="mt-0.5 text-[9px] text-white/45">
                      Search Visibility
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-end gap-1">
                  <span className="h-2 w-4 rounded-t bg-emerald-400/30" />
                  <span className="h-3 w-4 rounded-t bg-emerald-400/40" />
                  <span className="h-2.5 w-4 rounded-t bg-emerald-400/50" />
                  <span className="h-5 w-4 rounded-t bg-emerald-400/60" />
                  <span className="h-7 w-4 rounded-t bg-emerald-400/80" />
                  <span className="ml-auto text-[9px] text-emerald-300">
                    SEO
                  </span>
                </div>
              </div>

              {/* FLOATING CARD 4 — DEVELOPMENT */}
              <div className="hero-floating-label hero-float hero-parallax absolute bottom-2 right-0 z-20 block w-[46%] rounded-xl border border-purple-300/20 bg-[#17111e]/95 p-2 shadow-xl backdrop-blur-xl sm:right-0 sm:bottom-12 sm:w-44 sm:p-3 lg:-right-5 lg:bottom-16 lg:w-48">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-400/10 font-mono text-sm text-purple-300">
                    {"</>"}
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-white">
                      Web Development
                    </p>
                    <p className="mt-1 text-[9px] text-white/45">
                      React · Full Stack
                    </p>
                  </div>
                </div>

                <div className="mt-3 border-t border-white/10 pt-2">
                  <span className="text-[9px] tracking-wider text-white/40">
                    DESIGN · BUILD · OPTIMIZE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="relative mt-10 flex items-end justify-between pb-2 md:mt-0 md:pb-10">
          {/* Scroll Indicator */}
          <div className="hero-scroll relative mt-10 flex w-full flex-col items-center justify-center gap-4 pb-6 md:mt-0 md:pb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50">
              Scroll To Explore
            </span>

            <div className="flex h-14 w-8 justify-center rounded-full border border-white/30 p-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute bottom-8 left-8 top-[20%] hidden w-px bg-white/10 lg:block" />

      <div className="pointer-events-none absolute bottom-[12%] left-8 hidden h-px w-12 bg-white/10 lg:block" />
    </section>
  );
}

export default Hero;
