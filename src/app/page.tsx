import { Suspense } from 'react'
import { Hero } from '@/components/Hero'
import { ProjectList } from '@/components/ProjectList'
import { Skills } from '@/components/Skills'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      <Suspense fallback={<div className="flex justify-center p-8">Loading projects...</div>}>
        <ProjectList />
      </Suspense>
      
      <Skills />
      <ContactForm />
      <Footer />
    </main>
  )
}