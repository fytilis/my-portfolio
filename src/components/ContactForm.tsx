'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // ##################################################################
  // ### Η ΑΛΛΑΓΗ ΓΙΝΕΤΑΙ ΜΟΝΟ ΕΔΩ, ΣΕ ΑΥΤΗ ΤΗ ΣΥΝΑΡΤΗΣΗ ###
  // ##################################################################
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Στέλνουμε τα δεδομένα στο Formspree
      const response = await fetch('https://formspree.io/f/meozjaan', { // <-- ΒΑΛΕ ΤΟ LINK ΣΟΥ ΕΔΩ!
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      })

      // Ελέγχουμε αν η αποστολή ήταν επιτυχής
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        // Αν το Formspree επιστρέψει σφάλμα
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // ##################################################################
  // ### ΑΠΟ ΕΔΩ ΚΑΙ ΚΑΤΩ, Ο ΚΩΔΙΚΑΣ ΣΟΥ ΕΙΝΑΙ ΗΔΗ ΣΩΣΤΟΣ ###
  // ##################################################################
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in new opportunities and interesting projects. 
                  Whether you're a company looking to hire, or you're a fellow developer 
                  wanting to collaborate, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: 'thanasisfyt@gmail.com' },
                  { icon: '📍', label: 'Location', value: 'Ioannina,GRE' },
                  { icon: '💼', label: 'Status', value: 'Open to opportunities' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.label}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com/fytilis' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/athanasios-fytilis-075812333/' },
                { name: 'Instagram', url: 'https://www.instagram.com/_fytilis_' } 
              ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label={social.name}
              >
                <span className="text-xs font-bold">{social.name.slice(0, 2)}</span>
              </a>
              ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-500 text-center font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-500 text-center font-medium">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}