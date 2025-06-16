import React from 'react';
import { Brain, Users, Code, Search, Database, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Curiosity-Driven",
      description: "We believe the most interesting insights live in overlooked corners of the internet."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Transparency",
      description: "Every insight comes with citations and sources so you can verify and explore further."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical AI",
      description: "We respect content creators and follow responsible scraping practices."
    }
  ];

  const techStack = [
    "Custom long-tail data crawlers",
    "Open-source NLP pipelines",
    "Retrieval-augmented generation (RAG) using GPT-4o",
    "Vector databases for semantic search",
    "Real-time content monitoring systems"
  ];

  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Brain className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-400">Deepskim</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're building the infrastructure to surface insights from the internet's hidden corners, 
            helping curious minds access information that traditional search engines miss.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gray-950 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <blockquote className="text-2xl font-light text-gray-300 leading-relaxed italic border-l-4 border-blue-400 pl-6 text-left">
            "We believe tomorrow's breakthroughs come from today's overlooked corners. 
            Deepskim is built to explore the hidden layers of the internet and surface 
            insight for those willing to think differently."
          </blockquote>
        </div>
      </section>

      {/* Founding Story */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">The Founding Story</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded in 2025 by a team of researchers, hackers, and curious thinkers frustrated 
                by echo chambers in mainstream AI systems. We kept finding that the most interesting 
                insights were buried in places Google doesn't prioritize and ChatGPT hasn't seen.
              </p>
              <p>
                While working on various research projects, we noticed a pattern: the breakthrough 
                ideas often came from obscure forum discussions, GitHub issues, preprint papers, 
                and personal blogs. These sources were too scattered and niche for traditional 
                search engines to surface effectively.
              </p>
              <p>
                We wanted to build something that could systematically explore these margins 
                and surface the quiet signals that lead to loud shifts. Deepskim is our answer 
                to the question: "What if we could read everything interesting, not just 
                everything popular?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gray-950 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
                <div className="text-blue-400 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">How We Work</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Our approach combines specialized data collection with advanced AI analysis 
                  to surface insights that traditional methods miss.
                </p>
                <p>
                  We respect the communities and creators whose content we analyze, following 
                  ethical scraping practices and always providing proper attribution.
                </p>
                <p>
                  Every insight is contextual and cited, giving you not just the information 
                  but the ability to verify and explore further.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-blue-400" />
                Technical Stack
              </h3>
              <ul className="space-y-3">
                {techStack.map((tech, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gray-950 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="h-12 w-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8">Built by Curious Minds</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Our team combines expertise in machine learning, data engineering, and research 
            methodology. We're united by a shared belief that the most interesting ideas 
            often emerge from unexpected places.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-gray-300 italic">
              "We're researchers who got tired of reading the same sources everyone else reads, 
              engineers who love solving hard technical problems, and curious humans who believe 
              diverse perspectives lead to better insights."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Exploring the Margins</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to discover insights that others miss? Join our waitlist and help us 
            build the future of information discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Early Access
            </a>
            <a
              href="/sample-insights"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-gray-700"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;