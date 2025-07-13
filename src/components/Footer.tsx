export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              Athanasios Fytilis
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-stack developer passionate about creating innovative web applications 
              and delivering exceptional user experiences.
            </p>
            <div className="flex gap-4">
            {[
              { name: 'GitHub', url: 'https://github.com/fytilis' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/athanasios-fytilis-075812333/' },
              { name: 'Instagram', url: 'https://www.instagram.com/_fytilis_' } // <-- ΑΛΛΑΞΕ ΑΥΤΟ
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

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>thanasisfyt@gmail.com</li>
              <li>Ioannina, GRE</li>
              <li>Available for hire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Athanasios Fytilis. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}