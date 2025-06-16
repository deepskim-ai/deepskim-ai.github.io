import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Database, Lightbulb, Users, TrendingUp, Building, BarChart3, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Crawl the Hidden Web",
      description: "We build scrapers that pull from overlooked sources."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Embed and Analyze",
      description: "LLMs extract patterns, summarize trends, and filter noise."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Serve Up Contextual Insight",
      description: "You get citations, context, and fresh thinking."
    }
  ];

  const sampleQueries = [
    {
      query: "What are contrarian trends in climate tech?",
      result: "Found algae-carbon research in niche academic blogs",
      source: "academic-blogs"
    },
    {
      query: "What's broken in rural fintech?",
      result: "Surfaced threads from low-engagement banking forums",
      source: "forums"
    },
    {
      query: "How are indie devs using AI differently?",
      result: "Insights from solo hackers on GitHub issues",
      source: "github"
    }
  ];

  const useCases = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Researchers",
      description: "Find pre-peer-review gems"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Builders",
      description: "Discover product ideas from edge cases"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analysts",
      description: "Strengthen theses with missed data"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "VCs",
      description: "Track fringe conversations"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI that reads the internet's{' '}
            <span className="text-blue-400">margins</span>{' '}
            so you don't have to.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Deepskim.ai surfaces insights from long-tail sources — forums, preprints, GitHub, 
            obscure blogs — to help you think ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Get Early Access
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/sample-insights"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-gray-700"
            >
              See a Sample Insight
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors duration-200">
                  <div className="text-blue-400">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Queries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Sample Queries</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {sampleQueries.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors duration-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">"{item.query}"</h3>
                  <p className="text-gray-300 mb-4">{item.result}</p>
                  <div className="text-sm text-gray-500">
                    Source: {item.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Who Is Deepskim.ai For?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-200 hover:transform hover:scale-105">
                <div className="text-blue-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/use-cases"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-12 w-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Be the first to access the unseen.</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our waitlist and receive early research drops.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;