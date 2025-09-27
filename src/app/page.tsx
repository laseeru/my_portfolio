import Layout from "@/components/Layout";
import siteData from "../../content/site.json";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold">{siteData.name}</h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
          {siteData.title}
        </p>
        <p className="mt-2 text-xl font-medium text-blue-600 dark:text-blue-400">
          {siteData.tagline}
        </p>
        <p className="mt-5 max-w-2xl">
          {siteData.hero.blurb}
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium"
          >
            {siteData.hero.ctaPrimary}
          </a>
          <a
            href="/contact"
            className="bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-2 rounded-xl text-sm font-medium"
          >
            {siteData.hero.ctaSecondary}
          </a>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-4 max-w-3xl">
            {siteData.about.short}
          </p>
          <div className="mt-6">
            <a
              href="/about"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Read more about my background →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {siteData.projects.slice(0, 2).map((project) => (
              <article key={project.title} className="border rounded-2xl p-5">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Ongoing synthesis' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                    project.status === 'Prototype' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                    project.status === 'Concept' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                    'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View all projects →
            </a>
          </div>
        </div>
      </section>

      {/* Recent Speaking */}
      <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Recent Speaking</h2>
          <div className="mt-8">
            <article className="border rounded-2xl p-5">
              <h3 className="font-semibold">{siteData.speaking[0].event}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {siteData.speaking[0].location} • {siteData.speaking[0].date}
              </p>
              <ul className="mt-2 text-sm list-disc list-inside">
                {siteData.speaking[0].highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <blockquote className="mt-3 italic text-sm border-l-4 border-blue-500 pl-4">
                {siteData.speaking[0].quote}
              </blockquote>
            </article>
          </div>
          <div className="mt-6">
            <a
              href="/speaking"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View all speaking engagements →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}