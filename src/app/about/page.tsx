import Layout from "@/components/Layout";
import siteData from "../../../content/site.json";

export default function AboutPage() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        {/* Short Bio */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            {siteData.about.long}
          </p>
        </div>

        {/* Extended Bio */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="leading-relaxed mb-4">
            {siteData.about.extended}
          </p>
        </div>

        {/* Fast Facts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Fast Facts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {siteData.about.facts.map((fact, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span className="text-sm">{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skills & Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3">Research & Analysis</h3>
              <div className="flex flex-wrap gap-2">
                {["Qualitative research", "Literature synthesis", "Policy analysis", "Survey design"].map((skill) => (
                  <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "ML workflows", "Prompt engineering", "Web development"].map((skill) => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["English (native)", "Spanish (working)", "Medical terminology"].map((skill) => (
                  <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Background */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Education & Background</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium">Medical School</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Final year • Cuba</p>
              <p className="text-sm mt-1">Focus on AI applications in healthcare, particularly in low-resource settings</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium">Computer Engineering</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">KNUST • 2 years</p>
              <p className="text-sm mt-1">Foundation in systems thinking, data structures, and software development</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold mb-3">Let&apos;s Connect</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            I&apos;m always interested in collaborating on projects that make healthcare more accessible and effective.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-medium inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
