import Layout from "@/components/Layout";
import siteData from "../../content/site.json";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                  {siteData.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-medium">
                  {siteData.title}
                </p>
                <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {siteData.tagline}
                </p>
              </div>
              
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl">
                {siteData.hero.blurb}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="/projects"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <span>{siteData.hero.ctaPrimary}</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="group border-2 border-neutral-300 dark:border-neutral-600 hover:border-blue-500 dark:hover:border-blue-400 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center"
                >
                  <span>{siteData.hero.ctaSecondary}</span>
                  <svg className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                {/* Subtle floating elements */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-blue-500/10 rounded-xl rotate-12"></div>
                <div className="absolute top-20 right-8 w-8 h-8 bg-purple-500/10 rounded-full"></div>
                <div className="absolute bottom-16 left-8 w-16 h-16 bg-indigo-500/10 rounded-2xl rotate-45"></div>
                
                {/* Central content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">AI in Healthcare</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Bridging technology and medicine</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                {siteData.about.short}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Read more about my background
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white">Medical Student</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Final year, Cuba</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white">Computer Engineering</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">KNUST foundation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white">AI Research</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Low-resource healthcare</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Exploring AI solutions for healthcare challenges in low-resource settings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {siteData.projects.slice(0, 2).map((project, index) => (
              <article key={project.title} className="group bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === 'Ongoing synthesis' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                    project.status === 'Prototype' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                    project.status === 'Concept' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                    'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed text-sm">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href="/projects"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View all projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
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