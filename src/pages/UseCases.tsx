import React from 'react';
import { Users, Building, BarChart3, TrendingUp, BookOpen, GitBranch, MessageSquare, FileText } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Researchers",
      description: "Go beyond arXiv and PubMed. Find pre-peer-review gems in obscure papers, conference notes, and discussion forums.",
      examples: [
        "Discover emerging theories in preprint repositories",
        "Find cross-disciplinary connections in niche forums",
        "Access conference proceedings from smaller academic events",
        "Uncover research discussions on specialized platforms"
      ]
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Builders",
      description: "Discover product ideas from edge-case users. We pull insights from GitHub, Reddit, and indie blogs.",
      examples: [
        "Identify unmet user needs from GitHub issues",
        "Find product gaps discussed in indie maker communities",
        "Discover workflow problems in specialized subreddits",
        "Access real user feedback from niche blog comments"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Analysts & Strategists",
      description: "Strengthen your theses with data others missed. Find weak signals, early indicators, and contrarian takes.",
      examples: [
        "Track emerging market signals in specialized forums",
        "Find contrarian viewpoints from industry insiders",
        "Access early-stage company discussions",
        "Discover regulatory changes discussed in niche communities"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "VCs & Trendspotters",
      description: "Get in early. Track fringe conversations that signal emerging tech or unserved problems.",
      examples: [
        "Monitor developer conversations about new technologies",
        "Find early signals of market shifts in specialized communities",
        "Track startup discussions in indie founder groups",
        "Access unfiltered feedback from early adopters"
      ]
    }
  ];

  const sources = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Academic Preprints",
      description: "ArXiv, bioRxiv, and specialized preprint servers"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "GitHub Issues",
      description: "Developer discussions and feature requests"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Niche Forums",
      description: "Specialized communities and discussion boards"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Indie Blogs",
      description: "Personal blogs and niche publications"
    }
  ];

  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Who is <span className="text-blue-400">Deepskim.ai</span> for?
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We serve curious minds who need insights from the internet's hidden corners — 
            places where tomorrow's breakthroughs are quietly discussed today.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                    <div className="text-blue-400 mb-6">
                      {useCase.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{useCase.title}</h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="space-y-4">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors duration-200">
                        <p className="text-gray-300">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Data Sources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sources.map((source, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500/50 transition-colors duration-200">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {source.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{source.title}</h3>
                <p className="text-gray-300 text-sm">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to explore the margins?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our waitlist to be among the first to access insights from the internet's hidden corners.
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
              See Sample Insights
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;