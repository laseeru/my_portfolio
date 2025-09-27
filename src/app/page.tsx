"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-950/70 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-bold text-lg cursor-pointer" onClick={() => scrollTo("hero")}>
            Abdul-Rashid / Portfolio
          </span>
          <nav className="hidden md:flex gap-6 text-sm">
            {["About", "Projects", "Speaking", "Writing", "Contact"].map((label) => (
              <button
                key={label}
                onClick={() => scrollTo(label.toLowerCase())}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold">Abdul-Rashid Dasana Abdulai</h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
          Medical Student • AI in Healthcare
        </p>
        <p className="mt-5 max-w-2xl">
          I design and study AI tools for low-resource settings — focusing on adoption, clinician
          training, and patient trust. Recently shared and discussed this work with co-delegates at
          the Youth Vision Assembly 2025 in Amsterdam.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-2 rounded-xl text-sm font-medium"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-4 max-w-3xl">
            I&apos;m Abdul-Rashid, a final-year medical student with a background in computer engineering.
            My work focuses on practical AI applications in low-resource healthcare environments. In
            Cuba, I&apos;ve researched barriers to adoption — from infrastructure and training to trust
            and pedagogy. In Ghana, I prototype lightweight exam-prep tools for medical students.
          </p>
          <ul className="mt-6 grid md:grid-cols-2 gap-2 text-sm">
            <li>• Research focus: AI in low-resource healthcare</li>
            <li>• Computer Engineering foundation (KNUST, 2 years)</li>
            <li>• Barriers to AI adoption in Cuba&apos;s healthcare & education</li>
            <li>• Prototype: GMDC AI Prep Assistant (Ghana)</li>
            <li>• Mentor note: &ldquo;Your intervention was magnificent, and I am proud of you.&rdquo;</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Barriers in Cuban Healthcare",
                summary:
                  "Research into infrastructure, training, workflow, and trust barriers; draft curriculum proposals.",
              },
              {
                title: "GMDC AI Prep Assistant",
                summary: "Study assistant for Ghanaian medical students preparing for GMDC exam.",
              },
              {
                title: "Globin Suite",
                summary: "Exploring AI-assisted triage/decision support in low-resource hospitals.",
              },
              {
                title: "AI in Cuban Education",
                summary: "Survey and interviews on faculty readiness to teach AI responsibly.",
              },
            ].map((p) => (
              <article key={p.title} className="border rounded-2xl p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKING */}
      <section id="speaking" className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Speaking & Recognition</h2>
          <div className="mt-8 space-y-6">
            <article className="border rounded-2xl p-5">
              <h3 className="font-semibold">Youth Vision Assembly 2025 — Amsterdam</h3>
              <ul className="mt-2 text-sm list-disc list-inside">
                <li>Discussed AI in low-resource healthcare with co-delegates</li>
                <li>Met the Zenaios – Intelligent Healthcare team</li>
              </ul>
              <blockquote className="mt-3 italic text-sm">
                &ldquo;Your intervention was magnificent, and I am proud of you.&rdquo; — Prof. Fundora
              </blockquote>
            </article>
            <article className="border rounded-2xl p-5">
              <h3 className="font-semibold">Jornada Científica — Julio Trigo López Hospital, Cuba</h3>
              <p className="mt-2 text-sm">
                Shared perspectives on clinician training and constraints in AI adoption.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Writing</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "The Hidden Barriers to AI in Hospitals Aren't Just Technical",
                summary:
                  "Beyond compute: pedagogy, workflows, and trust are equally crucial in low-resource adoption.",
              },
              {
                title: "Building an Exam-Prep Assistant for GMDC",
                summary:
                  "Exploring prompt strategies and lightweight tools for Ghanaian medical students.",
              },
            ].map((post) => (
              <article key={post.title} className="border rounded-2xl p-5">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm">{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-3">
            Let&apos;s collaborate. I&apos;m looking for mentors and partners interested in practical, safe AI
            for low-resource healthcare.
          </p>
          <div className="mt-6">
            <a
              href="mailto:blaseeru@email.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Abdul-Rashid Dasana Abdulai • Built with Next.js + Tailwind
      </footer>
    </div>
  );
}