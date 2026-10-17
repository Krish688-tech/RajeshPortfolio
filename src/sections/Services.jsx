import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "DIGITAL MARKETING",
    description:
      "Strategic digital marketing focused on visibility, audience growth, lead generation, and business results.",
  },
  {
    number: "02",
    title: "SOCIAL MEDIA & ADS",
    description:
      "Creative social media strategies and paid advertising campaigns designed to reach the right audience.",
  },
  {
    number: "03",
    title: "SEO & GROWTH",
    description:
      "Search optimization and growth strategies that help businesses become more visible online.",
  },
  {
    number: "04",
    title: "WEBSITE DEVELOPMENT",
    description:
      "Creative, responsive, high-performance websites designed to turn visitors into customers.",
  },
  {
    number: "05",
    title: "FULL-STACK APPLICATIONS",
    description:
      "Complete digital systems built with modern frontend, backend, APIs, databases, and cloud technologies.",
  },
];

function Services() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".service-heading", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".service-row", {
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      id="services"
      ref={container}
      className="relative overflow-hidden bg-[#080808] px-6 py-24 md:px-12 md:py-32 lg:px-[12%] lg:py-40"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-62.5 top-[20%] h-150 w-150 rounded-full bg-purple-600/10 blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between gap-8 md:mb-24">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="text-xs font-semibold text-purple-400">
                04
              </span>

              <div className="h-px w-10 bg-white/30" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                What I Do
              </span>
            </div>

            <div className="overflow-hidden">
              <h2 className="service-heading font-display text-[18vw] leading-[0.85] tracking-wide md:text-[12vw] lg:text-[9rem]">
                SERVICES
              </h2>
            </div>
          </div>

          <p className="hidden max-w-xs text-sm leading-7 text-white/40 md:block">
            I combine creative strategy, marketing knowledge, and technical
            development to build stronger digital experiences.
          </p>
        </div>

        {/* Services List */}
       <div className="services-list border-t border-white/10">
  {services.map((service) => (
    <div
      key={service.number}
      className="service-row group relative cursor-pointer overflow-hidden border-b border-white/10 px-4 py-8 transition-colors duration-500 md:px-6 md:py-10"
    >
      {/* Hover Background */}
      <div className="absolute inset-0 translate-x-[-101%] bg-white/4 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />

      <div className="relative z-10 grid grid-cols-[50px_1fr_auto] items-center gap-4 md:grid-cols-[100px_1fr_50px] md:gap-8">

        {/* Number */}
        <span className="text-xs font-semibold text-white/30 transition-colors duration-300 group-hover:text-purple-400">
          {service.number}
        </span>

        {/* Content */}
        <div>
          <h3 className="font-display text-3xl leading-none tracking-wide transition-all duration-500 group-hover:translate-x-3 group-hover:text-white md:text-5xl lg:text-6xl">
            {service.title}
          </h3>

          <p className="mt-3 max-h-0 max-w-2xl overflow-hidden text-sm leading-6 text-white/50 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            {service.description}
          </p>
        </div>

        {/* Arrow */}
        <span className="text-2xl text-white/40 transition-all duration-500 group-hover:translate-x-3 group-hover:text-purple-400">
          →
        </span>

      </div>
    </div>
  ))}
</div>

        {/* Bottom Text */}
        <div className="mt-12 flex flex-col justify-between gap-6 text-sm text-white/40 md:mt-16 md:flex-row">
          <p>MARKETING × DESIGN × TECHNOLOGY</p>

          <p className="tracking-[0.2em]">
            LET'S CREATE SOMETHING DIFFERENT
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;