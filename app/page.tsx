import Image from "next/image";

const certifications = [
  {
    title: "CompTIA A+",
    image: "/certs/comptia-a-plus.jpg",
    credlyUrl:
      "https://www.credly.com/badges/bd89fd88-a0d2-4ae1-84d1-46654c62f6ec/public_url",
  },
  {
    title: "CompTIA Network+",
    image: "/certs/comptia-network-plus.jpg",
    credlyUrl:
      "https://www.credly.com/badges/400663e5-b334-47b5-b914-387da8f396a0/public_url",
  },
  {
    title: "CompTIA Security+",
    image: "/certs/comptia-security-plus.jpg",
    credlyUrl:
      "https://www.credly.com/badges/84c216c0-cb8f-4f6a-82b9-45ba4d543323/public_url",
  },
  {
    title: "Google Cyber Security Certification",
    image: "/certs/googleCyberSecurity.png",
    credlyUrl:
      "https://www.credly.com/badges/fa020190-8501-4bcf-be7c-0d2babfae167",
  },
];

const itSkills = [
  "Technical Troubleshooting",
  "End-User Support",
  "Networking Fundamentals",
  "Security Fundamentals",
  "Windows Systems",
  "Customer Service",
  "Documentation",
  "Process Discipline",
];

const programmingProjects = [
  {
    title: "IT Troubleshooting Assistant",
    description:
      "A real-world web application designed to help users diagnose and resolve common PC, software, and network issues through guided troubleshooting workflows and clean category-based navigation.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    image: "/projects/it-troubleshooting-assistant.png",
    githubUrl: "https://github.com/rcarpino/it-troubleshooting-assistant",
    demoUrl: "https://it-troubleshooting-assistant.vercel.app/",
  },
  {
    title: "Help Desk Ticket Simulator",
    description:
      "A simulated support ticket workflow project for ticket intake, priority assignment, issue tracking, and support process visualization.",
    tech: "React, TypeScript, Tailwind CSS",
    image: "/projects/help-desk-ticket-simulator.jpg",
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    title: "Python Automation Tools",
    description:
      "A collection of Python scripts for automation, reporting, and repetitive technical tasks to improve productivity and reduce manual work.",
    tech: "Python",
    image: "/projects/python-automation-tools.jpg",
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
];

const aiProjects = [
  {
    title: "AI Resume Tailoring Workflow",
    description:
      "A workflow for adjusting resume bullets and positioning to match job descriptions.",
  },
  {
    title: "AI Study Assistant for IT Certifications",
    description:
      "A guided learning helper for IT topics, practice questions, and concept review.",
  },
  {
    title: "AI Prompt-to-Prototype Pipeline",
    description:
      "A system for turning ideas into small software or game prototype plans quickly.",
  },
];

const unityProjects = [
  {
    title: "Simulation Game Prototype",
    description:
      "A Unity prototype focused on systems design, UI, and gameplay loops.",
  },
  {
    title: "Top-Down Arena Vehicle Prototype",
    description:
      "A gameplay prototype featuring movement, combat, and progression systems.",
  },
  {
    title: "Retro Sports Prototype",
    description:
      "A Unity project exploring arcade-style mechanics and responsive controls.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <div className="relative mb-6 h-36 w-36 overflow-hidden rounded-full border-4 border-slate-800 shadow-xl sm:h-44 sm:w-44">
            <Image
              src="/profile.png"
              alt="Richard Carpino profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
            IT Professional • Programmer • AI Builder • Unity Developer
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Richard Carpino
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            I build reliable technical solutions across IT support, software,
            AI-assisted workflows, and Unity game development.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-6 max-w-3xl text-slate-300">
          I am an IT-focused technical professional with experience in
          troubleshooting, customer support, structured problem-solving, and
          technical learning. My background also includes programming,
          AI-assisted workflow design, and Unity game development, allowing me
          to combine practical support skills with a builder mindset.
        </p>
      </section>

      <section
        id="certifications"
        className="border-y border-slate-800 bg-slate-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Certifications & Credentials</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.credlyUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-40 w-40">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 group-hover:text-cyan-400">
                    Click to view Credly badge
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">IT Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {itSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
  id="projects"
  className="border-y border-slate-800 bg-slate-900/50"
>
  <div className="mx-auto max-w-6xl px-6 py-20">
    <h2 className="text-3xl font-bold">Programming Projects</h2>
    <p className="mt-4 max-w-3xl text-slate-400">
      A selection of practical software and automation projects that demonstrate
      problem-solving, technical troubleshooting, and development skills.
    </p>

    <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {programmingProjects.map((project) => (
        <article
          key={project.title}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl"
        >
          <div className="relative h-48 w-full bg-slate-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>

            <p className="mt-3 text-slate-300">{project.description}</p>

            <p className="mt-4 text-sm font-medium text-cyan-400">
              {project.tech}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400"
              >
                GitHub
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">AI Skills & Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aiProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Unity Game Development</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {unityProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Resume & Contact</h2>
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-slate-300">Email: carpino82@gmail.com</p>
          <p className="mt-2 text-slate-300">Location: San Antonio, TX</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}