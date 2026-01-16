'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.5

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="parallax-orb w-[500px] h-[500px] bg-gradient-to-br from-primary to-secondary -top-48 -right-24"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div
          className="parallax-orb w-[400px] h-[400px] bg-gradient-to-br from-accent to-pink-600 -bottom-32 -left-32"
          style={{ transform: `translateY(${-parallaxOffset * 0.7}px)` }}
        />
        <div
          className="parallax-orb w-[350px] h-[350px] bg-gradient-to-br from-blue-400 to-cyan-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) translateY(${parallaxOffset * 0.3}px)` }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-40 h-40 rounded-full gradient-bg p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
              <img 
                src="/profile.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to emoji if image not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('flex', 'items-center', 'justify-center');
                    parent.innerHTML = '<div class="text-6xl">👨‍💻</div>';
                  }
                }}
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="block text-gray-400 text-2xl md:text-3xl font-normal mb-2">Hi, I'm</span>
          <span className="gradient-text">Rifky</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
          Frontend Developer & Designer
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting beautiful digital experiences with code and creativity
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/cv.pdf"
            download="Rifky_CV.pdf"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-primary rounded-full font-semibold hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-gray-500 rounded-full font-semibold hover:bg-gray-500/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
