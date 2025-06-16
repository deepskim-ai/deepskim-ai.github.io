import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, FileText, MessageSquare, GitBranch, BookOpen } from 'lucide-react';

const SampleInsights: React.FC = () => {
  const insights = [
    {
      question: "What unexpected AI use cases are emerging in education?",
      insight: "Found grassroots blog posts by indie educators on using GPT for special needs students, revealing personalized learning approaches not covered in mainstream EdTech discourse.",
      source: "Independent educator blogs and forums",
      sourceType: "blogs",
      tags: ["Education", "AI", "Special Needs", "Personalization"],
      date: "January 2025"
    },
    {
      question: "Any emerging problems in food supply chains?",
      insight: "Uncovered GitHub issue logs and conference slides about cold storage failures in sub-Saharan regions, highlighting IoT sensor limitations not discussed in mainstream supply chain reports.",
      source: "GitHub repositories and regional conference proceedings",
      sourceType: "github",
      tags: ["Supply Chain", "IoT", "Cold Storage", "Africa"],
      date: "December 2024"
    },
    {
      question: "What alternative models exist for online community moderation?",
      insight: "Found contrarian Reddit threads about 'community juries' and obscure academic proposals from 2015 suggesting peer-reviewed moderation systems, predating current debates by years.",
      source: "Reddit discussions and archived academic papers",
      sourceType: "forums",
      tags: ["Moderation", "Community", "Governance", "Peer Review"],
      date: "January 2025"
    },
    {
      question: "How are solo developers solving authentication differently?",
      insight: "Discovered indie maker blogs discussing passwordless auth implementations using WebAuthn, with detailed failure stories and workarounds not found in official documentation.",
      source: "Indie maker communities and personal blogs",
      sourceType: "blogs",
      tags: ["Authentication", "WebAuthn", "Indie Development"],
      date: "December 2024"
    },
    {
      question: "What are researchers saying about climate adaptation in coastal cities?",
      insight: "Found preliminary research in preprint servers discussing novel flood management techniques being tested in Southeast Asia, with methodologies not yet peer-reviewed.",
      source: "Preprint servers and regional research networks",
      sourceType: "preprints",
      tags: ["Climate", "Coastal Cities", "Flood Management", "Southeast Asia"],
      date: "January 2025"
    },
    {
      question: "Are there emerging concerns about remote work productivity tools?",
      insight: "Surfaced GitHub issue discussions and Hacker News threads about privacy concerns with productivity tracking software, including technical workarounds developers are sharing.",
      source: "GitHub issues and developer forums",
      sourceType: "github",
      tags: ["Remote Work", "Privacy", "Productivity", "Surveillance"],
      date: "December 2024"
    }
  ];

  const getSourceIcon = (sourceType: string) => {
    switch (sourceType) {
      case 'blogs':
        return <FileText className="h-5 w-5" />;
      case 'github':
        return <GitBranch className="h-5 w-5" />;
      case 'forums':
        return <MessageSquare className="h-5 w-5" />;
      case 'preprints':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            See What We're <span className="text-blue-400">Finding</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real insights surfaced from the internet's margins — the kind of information 
            that doesn't show up in mainstream search results or training data.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {insights.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-200 hover:transform hover:scale-[1.02]">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-blue-400 mt-1">
                      {getSourceIcon(item.sourceType)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        "{item.question}"
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {item.insight}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <ExternalLink className="h-4 w-4" />
                      <span>{item.source}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-500 pt-2 border-t border-gray-700">
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Find These */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">How We Surface These Insights</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Custom Crawlers</h3>
              <p className="text-gray-300">
                We build specialized scrapers for academic preprints, GitHub discussions, niche forums, and indie blogs.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-300">
                Large language models extract patterns, identify trends, and filter out noise from raw content.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Context & Citations</h3>
              <p className="text-gray-300">
                Every insight comes with source links, context, and the reasoning behind our findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want insights like these delivered to you?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Submit your own research questions and get access to insights from the internet's hidden corners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              Submit Your Own Query
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/use-cases"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-gray-700"
            >
              Learn More About Use Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SampleInsights;