import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const container = useRef(null);
  const previewRef = useRef(null);

  const [activeProject, setActiveProject] = useState(null);

  useGSAP(
    () => {
      // =================================
      // SECTION TITLE ANIMATION
      // =================================

      gsap.from(".projects-heading", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // =================================
      // PROJECT ROW ANIMATION
      // =================================

      gsap.from(".project-row", {
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // =================================
      // MOUSE FOLLOW
      // =================================

      const movePreview = (event) => {
        if (!previewRef.current) return;

        gsap.to(previewRef.current, {
          x: event.clientX + 25,
          y: event.clientY + 25,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", movePreview);

      return () => {
        window.removeEventListener("mousemove", movePreview);
      };
    },
    { scope: container },
  );

  // =================================
  // HOVER PROJECT
  // =================================

  const handleProjectEnter = (index) => {
    setActiveProject(index);

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const handleProjectLeave = () => {
    setActiveProject(null);

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="projects"
      ref={container}
      className="relative overflow-hidden bg-[#08090c] px-6 py-24 md:px-12 md:py-32 lg:px-[12%] lg:py-40"
    >
      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[15%] h-150 w-150 -translate-x-1/2 rounded-full bg-blue-600/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================
            HEADER
        ================================= */}

        <div className="mb-20 md:mb-28">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs font-semibold text-blue-400">05</span>

            <div className="h-px w-10 bg-white/30" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="overflow-hidden">
              <h2 className="projects-heading font-display text-[18vw] leading-[0.85] tracking-wide md:text-[12vw] lg:text-[10rem]">
                PROJECTS
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45 md:text-right">
              A selection of websites, digital marketing work, creative
              experiences, and full-stack projects built for real-world use.
            </p>
          </div>
        </div>

        {/* =================================
            DESKTOP
        ================================= */}

        <div className="hidden lg:block">
          {/* =================================
              FLOATING IMAGE
          ================================= */}

          <div
            ref={previewRef}
            className="pointer-events-none fixed left-0 top-0 z-9990 h-65 w-97.5 overflow-hidden rounded-2xl border border-white/15 bg-[#111] opacity-0 shadow-2xl"
            style={{
              transform: "translate3d(0, 0, 0) scale(0.9)",
            }}
          >
            {projects.map((project, index) => (
              <img
                key={project.id}
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                  activeProject === index
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0"
                }`}
              />
            ))}

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/20" />

            {/* VIEW */}

            {activeProject !== null && (
              <div className="absolute bottom-5 left-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[8px] font-bold tracking-[0.15em] text-black shadow-lg transition-transform duration-300">
                  VIEW
                </span>
              </div>
            )}
          </div>

          {/* =================================
              PROJECT LIST
          ================================= */}

          <div className="projects-list">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => handleProjectEnter(index)}
                onMouseLeave={handleProjectLeave}
                className="project-row group relative block min-h-65 border-t border-white/10"
              >
                <div className="relative grid min-h-65 grid-cols-[110px_1fr] items-center">
                  {/* NUMBER */}

                  <div className="relative z-10">
                    <span className="font-display text-6xl text-white/15 transition-all duration-500 group-hover:text-blue-400/60">
                      {project.id}
                    </span>
                  </div>

                  {/* PROJECT CONTENT */}

                  <div className="relative z-10 max-w-150 py-12 transition-transform duration-500 group-hover:translate-x-3">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                      {project.category}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="font-display text-6xl leading-none tracking-wide text-white transition-colors duration-500 group-hover:text-blue-300 xl:text-7xl">
                        {project.title}
                      </h3>

                      {project.status && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-amber-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                          {project.status}
                        </span>
                      )}
                    </div>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
                      {project.description}
                    </p>

                    {/* TAGS */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:border-blue-400/30 group-hover:text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* HOVER BACKGROUND */}

                  <div className="pointer-events-none absolute inset-0 -z-10 bg-white/2.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </a>
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>

        {/* =================================
            MOBILE
        ================================= */}

        <div className="projects-list space-y-20 lg:hidden">
          {projects.map((project) => (
            <article key={project.id} className="project-row relative">
              {/* NUMBER */}

              <span className="absolute -left-1 -top-8 z-10 font-display text-5xl text-white/15">
                {project.id}
              </span>

              {/* =================================
                  IMAGE LINK
              ================================= */}

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                aria-label={`Open ${project.title} website`}
              >
                <div className="relative h-[55vw] min-h-62.5 overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-active:scale-[0.98]"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                  {/* =================================
                      MOBILE VIEW BUTTON
                  ================================= */}

                  <div className="absolute bottom-5 left-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[8px] font-bold tracking-[0.15em] text-black shadow-lg">
                      VIEW
                    </span>
                  </div>
                </div>
              </a>

              {/* =================================
                  CONTENT
              ================================= */}

              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                  {project.category}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-5xl leading-none tracking-wide sm:text-6xl">
                    {project.title}
                  </h3>

                  {project.status && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-amber-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                  {project.description}
                </p>

                {/* TAGS */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =================================
            BOTTOM CTA
        ================================= */}

        <div className="mt-28 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-white/40">
              More projects and creative work coming soon.
            </p>

            <h3 className="mt-3 font-display text-4xl tracking-wide md:text-5xl">
              WANT TO SEE MORE?
            </h3>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-4 text-xs font-bold tracking-wider transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            LET'S WORK TOGETHER →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
