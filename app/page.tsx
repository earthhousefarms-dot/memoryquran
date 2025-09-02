'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Clever Navigation - Changes on scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <div className={`text-2xl font-black transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
              MQ
            </div>
            <div className={`hidden md:flex space-x-8 text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white/80'}`}>
              <a href="#" className="hover:text-black transition">Features</a>
              <a href="#" className="hover:text-black transition">Method</a>
              <a href="#" className="hover:text-black transition">Progress</a>
              <a href="#" className="hover:text-black transition">Pricing</a>
            </div>
          </div>
          <button className={`px-6 py-2.5 rounded-full font-medium transition-all ${
            scrolled 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION - Full viewport with gradient overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 animate-gradient-xy"></div>
        
        {/* Grid overlay for depth */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-8 max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            MEMORY
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              QURAN
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto font-light">
            The most advanced Quran memorization platform. AI-powered, scientifically proven, beautifully designed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:scale-105 transition-transform">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* BENTO GRID SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl font-black mb-16 text-center">Everything You Need</h2>
        
        <div className="grid grid-cols-4 grid-rows-3 gap-6 h-[600px]">
          {/* Large feature - spans 2x2 */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-8 text-white flex flex-col justify-between group hover:scale-[1.02] transition-transform">
            <div>
              <h3 className="text-3xl font-bold mb-4">Voice Recognition</h3>
              <p className="text-lg opacity-90">Industry-leading accuracy with real-time feedback on your recitation</p>
            </div>
            <div className="text-6xl font-black opacity-20">🎙️</div>
          </div>

          {/* Medium feature - spans 2x1 */}
          <div className="col-span-2 row-span-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl p-8 text-white group hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-bold mb-2">Spaced Repetition</h3>
            <p className="opacity-90">Scientifically optimized review schedule</p>
          </div>

          {/* Small features */}
          <div className="col-span-1 row-span-1 bg-orange-500 rounded-3xl p-6 text-white group hover:scale-[1.02] transition-transform">
            <h4 className="text-xl font-bold mb-2">Daily Goals</h4>
            <p className="text-sm opacity-90">Stay consistent</p>
          </div>

          <div className="col-span-1 row-span-1 bg-pink-500 rounded-3xl p-6 text-white group hover:scale-[1.02] transition-transform">
            <h4 className="text-xl font-bold mb-2">Progress Maps</h4>
            <p className="text-sm opacity-90">Visual tracking</p>
          </div>

          <div className="col-span-2 row-span-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 text-white group hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-bold mb-2">Tajweed Analysis</h3>
            <p className="opacity-90">Perfect your pronunciation with AI guidance</p>
          </div>
        </div>
      </section>

      {/* STATS SECTION WITH CLEVER LAYOUT */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                25K+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                3.5M
              </div>
              <div className="text-gray-400">Verses Memorized</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                98%
              </div>
              <div className="text-gray-400">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                4.9★
              </div>
              <div className="text-gray-400">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-6xl font-black mb-8">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-12">Join thousands who are memorizing with confidence</p>
          <button className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform">
            Begin Your Journey
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </main>
  )
}