import React, { useState } from 'react';
import { Mail, Send, Twitter, Github, Linkedin, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: 'https://x.com/deepskim_ai',
      handle: '@deepskim_ai'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/deepskim-ai',
      handle: 'github.com/deepskim-ai'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/company/deepskim-ai',
      handle: 'linkedin.com/company/deepskim'
    }
  ];

  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We'd love to <span className="text-blue-400">hear from you</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join our waitlist, share your research questions, or just say hello. 
            We're always excited to connect with curious minds.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form action="https://formspree.io/f/meoklzqd" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your research interests, questions you'd like answered, or just say hello..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
                <p className="text-gray-300 mb-4">
                  For direct inquiries, partnerships, or urgent matters:
                </p>
                <a
                  href="mailto:deepskim.ai@gmail.com"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors duration-200"
                >
                  deepskim.ai@gmail.com
                </a>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <div className="text-blue-400 group-hover:text-blue-300">
                        {link.icon}
                      </div>
                      <span>{link.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-400" />
                  Privacy
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We respect your privacy and will only use your contact information to respond 
                  to your inquiry and share relevant updates about Deepskim.ai. We never share 
                  your information with third parties.
                </p>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm underline mt-2 inline-block transition-colors duration-200"
                >
                  Read our Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gray-950 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">When will Deepskim.ai be available?</h3>
              <p className="text-gray-300">
                We're currently in early development and testing. Join our waitlist to be among 
                the first to access the platform when we launch our private beta.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">How do you ensure data quality?</h3>
              <p className="text-gray-300">
                We use a combination of AI filtering, source reputation scoring, and human curation 
                to ensure the insights we surface are relevant and reliable. Every insight comes 
                with source citations for verification.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Can I suggest specific sources or topics?</h3>
              <p className="text-gray-300">
                Absolutely! We're always looking to expand our coverage. Contact us with suggestions 
                for specific communities, sources, or research areas you'd like us to explore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
