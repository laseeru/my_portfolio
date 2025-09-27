import Layout from "@/components/Layout";
import siteData from "../../../content/site.json";

export default function WritingPage() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Writing</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
          Thoughts on AI in healthcare, implementation challenges, and building tools that actually work.
        </p>

        <div className="space-y-8">
          {siteData.writing.map((post) => (
            <article key={post.slug} className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start gap-2 mb-3">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <span className="text-sm text-neutral-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    {post.summary}
                  </p>

                  <div className="flex gap-3">
                    <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                      Read More →
                    </button>
                    <span className="text-neutral-400 text-sm">•</span>
                    <span className="text-neutral-500 text-sm">5 min read</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Writing Philosophy */}
        <div className="mt-16 bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Why I Write</h2>
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              I write to bridge the gap between technical possibility and practical implementation in healthcare. 
              Too often, AI solutions are built without understanding the real constraints and needs of clinicians 
              working in resource-limited environments.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              My goal is to share insights from the field — the human barriers, workflow challenges, and trust 
              issues that determine whether technology actually helps or hinders patient care.
            </p>
          </div>
        </div>

        {/* Newsletter/Contact */}
        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              I occasionally share insights on AI in healthcare and implementation challenges.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-medium inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
