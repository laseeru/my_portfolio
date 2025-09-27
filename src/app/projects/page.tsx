import Layout from "@/components/Layout";
import siteData from "../../../content/site.json";

export default function ProjectsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing synthesis':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300';
      case 'Prototype':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300';
      case 'Concept':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300';
      case 'Draft':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl">
          A collection of my work in AI healthcare research, from barrier analysis to practical tools for medical education.
        </p>

        <div className="space-y-8">
          {siteData.projects.map((project) => (
            <article key={project.title} className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    {project.summary}
                  </p>

                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Description</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {Object.entries(project.links).map(([key, value]) => {
                      if (!value) return null;
                      return (
                        <a
                          key={key}
                          href={value}
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                        >
                          {key === 'paper' ? '📄 Paper' : 
                           key === 'slides' ? '📊 Slides' :
                           key === 'demo' ? '🚀 Demo' :
                           key === 'repo' ? '💻 Repository' :
                           key === 'notes' ? '📝 Notes' :
                           key === 'curriculum' ? '📚 Curriculum' :
                           key}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Process */}
        <div className="mt-16 bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Research-First</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I start with understanding the real barriers and constraints before building solutions.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Human-Centered</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Every tool is designed with clinicians&apos; workflows and patients&apos; trust in mind.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Incremental Impact</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I focus on practical, deployable solutions that can make a difference today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
