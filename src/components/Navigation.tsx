'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'projects', 'skills', 'contact']
      const scrollY = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gradient">
            AF
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          
        <div className="hidden md:block">
          <a
            href="/CV-FYTILIS%20ATHANASIOS.pdf" 
            download="Athanasios_Fytilis_CV.pdf" 
            className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
        </div>
      </div>
    </nav>
  )
} 