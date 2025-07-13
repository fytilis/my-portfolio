import type { AppProps } from 'next/app'

// Εισάγουμε τα global στυλ μας
import '@/styles/globals.css'
import '@/index.css' // Κρατάμε και το index.css που είχες

// Το Next.js χρησιμοποιεί αυτό το αρχείο για να τυλίξει όλες τις σελίδες.
// Δεν χρειάζονται Providers εδώ, αφού τα έχεις μέσα στα components σου.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;