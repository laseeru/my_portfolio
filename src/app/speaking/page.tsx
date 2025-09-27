import Layout from "@/components/Layout";
import siteData from "../../../content/site.json";

export default function SpeakingPage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Speaking & Recognition</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl">
          Sharing insights on AI in healthcare and connecting with the global community of innovators.
        </p>

        <div className="space-y-8">
          {siteData.speaking.map((event, index) => (
            <article key={index} className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start gap-2 mb-4">
                    <h2 className="text-xl font-semibold">{event.event}</h2>
                    <div className="flex flex-col md:flex-row gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span>{event.location}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Highlights</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-300">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {event.quote && (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r">
                      <p className="italic text-sm text-neutral-700 dark:text-neutral-300">
                        {event.quote}
                      </p>
                    </blockquote>
                  )}

                  {event.media && event.media[0] && (
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Media</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {event.media.map((media, idx) => (
                          <div key={idx} className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                            <span className="text-xs text-neutral-500">Image {idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Publications Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Publications</h2>
          <div className="space-y-4">
            <article className="border rounded-xl p-4">
              <h3 className="font-medium">Dream-Reality Confusion</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Revista Ciencias y Conciencias
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Essay exploring the intersection of consciousness and reality in medical practice.
              </p>
            </article>
            <article className="border rounded-xl p-4">
              <h3 className="font-medium">Coursera Python Specialization</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Foundation for tooling and data tasks
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Comprehensive Python programming foundation supporting my technical projects.
              </p>
            </article>
          </div>
        </div>

        {/* Speaking Philosophy */}
        <div className="mt-16 bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Speaking Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Bridging Communities</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I believe in connecting the medical and technical communities to solve real healthcare challenges.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Practical Insights</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                My talks focus on actionable insights from real-world implementation challenges and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
