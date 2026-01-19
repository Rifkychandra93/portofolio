'use client'

import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string
  level: number
  icon: string
}

const skills: Skill[] = [
  { name: 'React', level: 80, icon: '⚛️' },
  { name: 'Next.js', level: 85, icon: '▲' },
  { name: 'TypeScript', level: 85, icon: '📘' },
  { name: 'Node.js', level: 75, icon: '🟢' },
  { name: 'Tailwind CSS', level: 90, icon: '🎨' },
  { name: 'UI/UX Design', level: 85, icon: '✨' },
  { name: 'HTML', level: 85, icon: '🌐' },
  { name: 'Git', level: 90, icon: '📦' },
]

export default function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base px-4">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index, isVisible }: { skill: Skill; index: number; isVisible: boolean }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level)
      }, index * 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.level, index])

  return (
    <div
      className={`glass rounded-2xl p-6 hover-lift transition-all duration-500`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl mb-4">{skill.icon}</div>
      <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
      
      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1500 ease-out flex items-center justify-end"
          style={{ width: `${progress}%` }}
        >
          <span className="text-xs font-bold text-white pr-2">{skill.level}%</span>
        </div>
      </div>
    </div>
  )
}
