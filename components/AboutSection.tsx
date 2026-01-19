'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 gradient-text">
          About Me
        </h2>
        <p className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">Get to know me better</p>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I am an experienced Website Designer with a strong background in UI/UX design and frontend development.
              I am passionate about creating engaging, functional, and user-friendly digital experiences.
              Proficient in a wide range of web design and development tools
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I possess a solid understanding of how to integrate aesthetic and technical elements to build websites that are not only visually appealing but also effective in achieving business objectives. 
              I am consistently motivated to tackle design challenges and develop innovative, accessible solutions for diverse audiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
              <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover-lift">
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">2</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
              </div>
              <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover-lift">
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">5</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Projects Done</p>
              </div>
              <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover-lift">
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">8</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Visual Cards */}
          <div className="relative h-64 sm:h-80 md:h-96 hidden md:block">
            <div className="absolute top-0 left-0 glass rounded-3xl p-8 hover-lift animate-float">
              <div className="text-5xl mb-4">💻</div>
              <h4 className="text-xl font-semibold">Development</h4>
            </div>
            <div className="absolute top-1/2 right-1/2 -translate-x-1/2 glass rounded-3xl p-8 hover-lift animate-float" style={{ animationDelay: '-2s' }}>
              <div className="text-5xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold">Design</h4>
            </div>
            <div className="absolute top-0 left-1/2 -translate-y-1/2 glass rounded-3xl p-8 hover-lift animate-float" style={{ animationDelay: '-4s' }}>
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold">Innovation</h4>
            </div>
          </div>

          {/* Mobile Visual Cards - Grid Layout */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:hidden">
            <div className="glass rounded-2xl p-4 text-center hover-lift">
              <div className="text-3xl sm:text-4xl mb-2">💻</div>
              <h4 className="text-sm sm:text-base font-semibold">Development</h4>
            </div>
            <div className="glass rounded-2xl p-4 text-center hover-lift">
              <div className="text-3xl sm:text-4xl mb-2">🎨</div>
              <h4 className="text-sm sm:text-base font-semibold">Design</h4>
            </div>
            <div className="glass rounded-2xl p-4 text-center hover-lift">
              <div className="text-3xl sm:text-4xl mb-2">🚀</div>
              <h4 className="text-sm sm:text-base font-semibold">Innovation</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
