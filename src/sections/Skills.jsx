import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".skills-label", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".skills-line",
          {
            yPercent: 100,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".skills-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );
    },
    { scope: container }
  );

  const skills = [
    {
      number: "01",
      title: "DIGITAL MARKETING",
      description:
        "Building visibility, attracting audiences, and turning attention into business growth.",
      items: ["SEO", "Social Media", "Meta Ads", "Google Ads", "Content Strategy"],
    },
    {
      number: "02",
      title: "WEB DEVELOPMENT",
      description:
        "Creating modern websites and full-stack applications designed for real-world use.",
      items: ["React", "JavaScript", "Node.js", "MongoDB", "REST APIs"],
    },
    {
      number: "03",
      title: "DESIGN & CREATIVE",
      description:
        "Combining visual design and creative thinking to create experiences people remember.",
      items: ["UI / UX", "Figma", "Photoshop", "Creative Strategy", "Branding"],
    },
    {
      number: "04",
      title: "AI WORKFLOW",
      description:
        "Using modern AI tools to research, create, develop, automate, and solve problems faster.",
      items: ["ChatGPT", "Gemini", "Kimi", "Higgsfield AI", "Google Flow"],
    },
    {
      number: "05",
      title: "APPLICATION DEVELOPMENT",
      description:
        "Currently expanding from websites into scalable applications and enterprise-level digital products.",
      items: ["Flutter", "App Architecture", "APIs", "Database Systems", "Automation"],
    },
    {
      number: "06",
      title: "PROBLEM SOLVING",
      description:
        "Breaking complex ideas into practical systems, testing solutions, and continuously improving them.",
      items: ["Research", "Debugging", "System Thinking", "Testing", "Optimization"],
    },
  ];

  return (
    <section
      id="skills"
      ref={container}
      className="relative overflow-hidden bg-[#0b0b0d] px-5 py-20 md:px-12 md:py-24 lg:px-[12%] lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-125 w-125 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="skills-label mb-10 flex items-center gap-4 md:mb-12">
          <span className="text-xs font-semibold text-blue-400">
            03
          </span>

          <div className="h-px w-10 bg-white/30" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Skills
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-5xl font-display leading-[0.86] tracking-wide">

          <div className="overflow-hidden">
            <h2 className="skills-line text-[15vw] md:text-[10vw] lg:text-[7rem]">
              SKILLS THAT
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="skills-line text-[15vw] text-white/25 md:text-[10vw] lg:text-[7rem]">
              TURN IDEAS
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="skills-line text-[15vw] text-blue-400 md:text-[10vw] lg:text-[7rem]">
              INTO REALITY.
            </h2>
          </div>

        </div>

        {/* Description */}
        <p className="skills-description mt-8 max-w-2xl text-sm leading-7 text-white/60 md:mt-10 md:text-lg md:leading-8">
          Marketing, design, development, and AI working together to create
          digital experiences that look good, perform well, and help businesses
          grow.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 lg:gap-5">

          {skills.map((skill) => (
            <div
              key={skill.number}
              className="group rounded-2xl border border-white/10 bg-white/2 p-5 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/4 md:p-7"
            >

              {/* Card Top */}
              <div className="flex items-center justify-between">

                <span className="text-xs font-semibold tracking-[0.2em] text-blue-400/70">
                  {skill.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-blue-400/60">
                  Skill
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold tracking-wide text-white md:text-xl">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">
                {skill.description}
              </p>

              {/* Skill Tags */}
              <div className="mt-6 flex flex-wrap gap-2">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/50 transition-all duration-300 group-hover:border-blue-400/20 group-hover:text-white/70"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 border-t border-white/10 pt-8 md:mt-14">
          <p className="max-w-4xl text-lg leading-8 text-white/40 md:text-2xl md:leading-9">
            I don't see these as separate skills. I see them as different
            tools for solving the same problem — building something that works.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;