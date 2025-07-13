// src/components/Hero.tsx
'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {mounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
            Athanasios Fytilis
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in">
            Cse Student & Tech Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about building innovative web applications with modern technologies. 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in">
            <a
              href="https://github.com/fytilis" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="mailto:thanasisfyt@gmail.com"
              className="inline-block px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-in">
            {[
              { name: 'GitHub',   href: 'https://github.com/fytilis',   initials: 'Gi' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/athanasios-fytilis-075812333/', initials: 'Li' },
              { name: 'Instagram',href: 'https://www.instagram.com/_fytilis_/', initials: 'In' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow group"
                aria-label={social.name}
              >
                <span className="text-sm font-medium group-hover:scale-110 transition-transform">
                  {social.initials}
                </span>
              </a>
            ))}
          </div>
          
        </div> {/* <-- ΤΟ DIV ΠΟΥ ΕΛΕΙΠΕ ΤΟ ΚΛΕΙΣΙΜΟ ΤΟΥ */}
      </div>  

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}