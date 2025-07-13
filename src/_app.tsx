import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
// Αν το αρχείο globals.css υπάρχει στο 'src/styles/globals.css', άφησε την παρακάτω γραμμή.
// Αλλιώς, σβήστην.
import '@/app/globals.css' 

// Δημιουργούμε το client μία φορά έξω από το component για καλύτερη απόδοση.
const queryClient = new QueryClient();

// Αυτό είναι το βασικό App component για το Next.js
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        {/* Το Next.js θα φορτώσει τη σωστή σελίδα (Index, About, κλπ.) εδώ */}
        <Component {...pageProps} />

        {/* Τα Toasters βρίσκονται εδώ για να εμφανίζονται πάνω από κάθε σελίδα */}
        <Toaster />
        <Sonner />
        
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default MyApp;