import { Phone, Clock, Zap, CheckCircle, TrendingUp, Shield, BarChart3, MessageSquare, UserX, Loader, Filter, Sparkles, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full bg-[#212730]/95 backdrop-blur-md border-b border-[#212730] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Phone className="w-7 h-7 text-white" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Vocalent</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${
                activeSection === 'hero' ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('problems')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${
                activeSection === 'problems' ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              Problems
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${
                activeSection === 'how-it-works' ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${
                activeSection === 'insights' ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${
                activeSection === 'pricing' ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              Pricing
            </button>
          </div>
          <button className="bg-[#212730] hover:bg-[#2a3340] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-[#212730]/50 hover:shadow-xl hover:shadow-[#212730]/60 border border-gray-700">
            Get Started
          </button>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0e14] to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#212730]/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#212730]/50 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Next-Gen AI Recruitment</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Never Miss a Candidate.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Screen 24/7 with AI that speaks like a human.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Go from hundreds of applicants to your top picks overnight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-[#212730] hover:bg-[#2a3340] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#212730]/50 hover:shadow-2xl hover:shadow-[#212730]/60 transform hover:-translate-y-1 border border-gray-700 relative overflow-hidden">
              <span className="relative z-10">Start Screening Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="bg-black hover:bg-[#0a0e14] text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-700 hover:border-gray-600 transition-all duration-300">
              See How It Works
            </button>
          </div>
          <p className="mt-8 text-sm text-gray-500">Book a 5-minute demo • No credit card required</p>
        </div>
      </section>

      <section id="problems" className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0e14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stop Losing Top Talent to a Slow Hiring Process.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-[#212730] p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Loader className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Time Wasted on Scheduling</h3>
                <p className="text-gray-400 leading-relaxed">
                  Recruiters waste hours on phone tag and repetitive qualifying questions instead of evaluating real talent.
                </p>
              </div>
            </div>
            <div className="group bg-[#212730] p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <UserX className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Lost Candidates After Hours</h3>
                <p className="text-gray-400 leading-relaxed">
                  Top candidates apply at night and are snatched by competitors with faster follow-up times.
                </p>
              </div>
            </div>
            <div className="group bg-[#212730] p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Filter className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Overwhelmed by Complexity</h3>
                <p className="text-gray-400 leading-relaxed">
                  Teams struggle with slow-to-implement, complex software that doesn't deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0e14]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Simple, Robust, 24/7 Screening Agent.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-[#212730] w-20 h-20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <Phone className="w-10 h-10 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Call</h3>
              <p className="text-gray-400 leading-relaxed">
                Candidates call a dedicated number the moment they apply. No scheduling required. The AI agent is live 24/7.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-[#212730] w-20 h-20 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <MessageSquare className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Interview</h3>
              <p className="text-gray-400 leading-relaxed">
                A premium AI voice delivers a natural and respectful candidate experience that builds your employer brand.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-[#212730] w-20 h-20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <Zap className="w-10 h-10 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Logic</h3>
              <p className="text-gray-400 leading-relaxed">
                Simple, robust, rule-based script transcribes answers in real-time and guides the conversation intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0e14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Actionable Insights. Zero Guesswork.
            </h2>
            <p className="text-xl text-gray-400">Your simple, password-protected recruiter dashboard</p>
          </div>
          <div className="bg-[#212730] rounded-2xl border border-gray-700 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="relative grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Full Transcript</h3>
                    <p className="text-gray-400">Read the entire conversation. See exactly what the candidate said and how they responded.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Sentiment Score</h3>
                    <p className="text-gray-400">Instantly see the candidate's tone (Positive/Negative/Neutral) throughout the interview.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30 group-hover:border-blue-500/60 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Keyword Match</h3>
                    <p className="text-gray-400">Automatic checks for mandatory skills like "Python," "Django," or any requirements you set.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30 group-hover:border-red-500/60 transition-colors duration-300">
                    <BarChart3 className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Red Flag Detection</h3>
                    <p className="text-gray-400">System flags deal-breaker phrases automatically so you don't miss warning signs.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-black/50 to-black/30 rounded-xl overflow-hidden border border-gray-700/50">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dashboard Analytics"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0e14]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-cyan-500/30 blur-2xl"></div>
            <Shield className="relative w-16 h-16 text-cyan-400 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium Quality, Unbeatable Cost.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            We strategically invested in the premium, human-like voice because candidate experience is key. This quality-optimized model builds credibility with your applicants. Our low cost structure (around $0.25–$0.30 per minute) means we deliver this superior product at a highly competitive price, giving you a top-tier screening tool without the enterprise software cost.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#212730] p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <p className="text-3xl font-bold text-cyan-400 mb-2">$0.25-$0.30</p>
              <p className="text-gray-300 font-medium">Per Minute</p>
            </div>
            <div className="bg-[#212730] p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <p className="text-3xl font-bold text-emerald-400 mb-2">24/7</p>
              <p className="text-gray-300 font-medium">Always Available</p>
            </div>
            <div className="bg-[#212730] p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <p className="text-3xl font-bold text-blue-400 mb-2">100%</p>
              <p className="text-gray-300 font-medium">Human-Quality Voice</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#212730] to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Give Your Recruiters Back Their Day.
          </h2>
          <p className="text-2xl mb-10 text-gray-300">
            Stop sifting. Start interviewing.
          </p>
          <button className="group bg-white hover:bg-gray-100 text-black px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 relative overflow-hidden">
            <span className="relative z-10">Get Started & Request a Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="mt-8 text-gray-400 text-lg">
            Built for ambitious hiring teams in tech and logistics.
          </p>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Phone className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">Vocalent</span>
          </div>
          <p className="text-sm">
            Automate first-round interviews with human-quality AI voice screening.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-xs mt-4 text-gray-600">
            © 2025 Vocalent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
