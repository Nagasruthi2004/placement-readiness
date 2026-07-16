import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { Analytics } from '@vercel/analytics/next'

const OWNER = process.env.NEXT_PUBLIC_GITHUB_OWNER ?? 'brittytino'
const REPO  = process.env.NEXT_PUBLIC_GITHUB_REPO  ?? 'placement-readiness'

export const metadata: Metadata = {
  title: {
    default: 'Placement Readiness Portal — PSG College Of Technology (MCA)',
    template: '%s | Placement Readiness - PSG Tech',
  },
  icons: {
    icon: '/favicon.png',
  },
  description:
    'Official Placement Readiness Portal for PSG College Of Technology (MCA of PSGCT). Track submissions, coding scores, and engineering sprints. Managed by Placement Representative 2025-2027: Tino Britty.',
  keywords: [
    'PSG College Of Technology',
    'PSG Tech',
    'MCA of PSGCT',
    'MCA - Tino Britty',
    'Tino Britty',
    'Placement Representative 2025 -2027-Tino Britty',
    'Placement Readiness',
    'Engineering Sprint',
    'Coding Leaderboard',
    'PSG Tech Placements',
  ],
  authors: [{ name: 'Tino Britty', url: 'https://class.psgmx.tech' }],
  creator: 'Tino Britty',
  publisher: 'PSG College Of Technology (MCA)',
  category: 'education',
  metadataBase: new URL('https://class.psgmx.tech/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://class.psgmx.tech/',
    siteName: 'PSG Tech MCA Placement Readiness',
    title: 'Placement Readiness Portal — PSG College Of Technology',
    description: 'Official Placement Readiness Portal for MCA of PSGCT. Track submissions, coding scores, and engineering sprints.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Placement Readiness Portal - PSG College Of Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placement Readiness Portal — PSG College Of Technology',
    description: 'Official Placement Readiness Portal for MCA of PSGCT. Placement Representative: Tino Britty.',
    images: ['/og-image.webp'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'MCA of PSGCT - Placement Readiness',
  alternateName: 'PSG College Of Technology MCA',
  url: 'https://class.psgmx.tech/',
  logo: 'https://class.psgmx.tech/og-image.webp',
  description: 'Official Placement Readiness Portal for PSG College Of Technology (MCA of PSGCT). Managed by Placement Representative 2025-2027: Tino Britty.',
  member: {
    '@type': 'Person',
    name: 'Tino Britty',
    jobTitle: 'Placement Representative 2025-2027',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased relative bg-[#050505]">
        
        {/* Background Effects Wrapper (Fixed & Clipped to prevent scroll bloat) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-500/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
          <Sidebar githubOwner={OWNER} githubRepo={REPO} />
          
          <main className="flex-1 lg:pl-64 min-w-0 flex flex-col">
            <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 animate-fade-in flex-1">
              {children}
            </div>
            
            <footer className="mt-8 border-t border-slate-800/60 py-6 text-center text-xs text-slate-500 backdrop-blur-sm lg:hidden">
              <p className="font-medium text-slate-400">
                MCA Department, PSG College of Technology · 25MX Cohort
              </p>
              <p className="mt-2 text-slate-600">Scores refresh every 60 seconds · No login required</p>
              <p className="mt-3 text-slate-500">
                Developed by <a href="https://tinobritty.me" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors font-medium">Tino Britty J</a><br/>(Placement Representative)
              </p>
            </footer>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
