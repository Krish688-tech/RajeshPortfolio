import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".contact-label", {
      y: 25,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".contact-line",
        {
          yPercent: 110,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.2"
      )
      .from(
        ".contact-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".contact-button",
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        ".contact-info",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      );
  }, { scope: container });

  return (
    <section
      id="contact"
      ref={container}
      className="relative overflow-hidden bg-[#0b0b0d] px-6 py-24 md:px-12 md:py-32 lg:px-[12%] lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="contact-label mb-16 flex items-center gap-4">
          <span className="text-xs font-semibold text-blue-400">
            07
          </span>

          <div className="h-px w-10 bg-white/30" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Contact
          </span>
        </div>

        {/* Main Heading */}
        <div className="font-display leading-[0.85] tracking-wide">

          <div className="overflow-hidden">
            <h2 className="contact-line text-[15vw] md:text-[11vw] lg:text-[9rem]">
              HAVE A
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="contact-line text-[15vw] text-white/30 md:text-[11vw] lg:text-[9rem]">
              PROJECT
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="contact-line text-[15vw] md:text-[11vw] lg:text-[9rem]">
              IN MIND?
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="contact-line text-[15vw] text-blue-400 md:text-[11vw] lg:text-[9rem]">
              LET'S BUILD.
            </h2>
          </div>

        </div>

        {/* Bottom Content */}
        <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-2 lg:items-end">

          {/* Description */}
          <div className="contact-description max-w-xl">
            <p className="text-lg leading-8 text-white/70 md:text-xl">
              Have an idea, a business that needs a stronger digital
              presence, or a website that needs to perform better?
            </p>

            <p className="mt-5 text-sm leading-7 text-white/40">
              Let's talk about your goals, your audience, and how we
              can turn your idea into a digital experience that works.
            </p>

            {/* CTA */}
            <a
              href="mailto:your@email.com"
              className="contact-button mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold tracking-wider text-black transition-all duration-300 hover:scale-105 hover:bg-blue-400"
            >
              START A CONVERSATION ↗
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid gap-8 sm:grid-cols-2">

            <div className="contact-info">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
                Email
              </span>

              <a
                href="mailto:your@email.com"
                className="mt-3 block text-sm text-white/70 transition hover:text-white"
              >
                webbuilder.rajesh@gmail.com
              </a>
            </div>

            <div className="contact-info">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
                Location
              </span>

              <p className="mt-3 text-sm text-white/70">
                Chennai, Chrompet
              </p>
            </div>

            {/**<div className="contact-info sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
                Social
              </span>

              <div className="mt-4 flex flex-wrap gap-6">

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Instagram ↗
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  GitHub ↗
                </a>

              </div>
            </div>**/}

          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

          <span>
            © {new Date().getFullYear()} Rajesh. All rights reserved.
          </span>

          <span className="tracking-[0.2em]">
            DIGITAL MARKETING × DEVELOPMENT
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;