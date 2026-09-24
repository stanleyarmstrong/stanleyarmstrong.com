import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { getContent } from '@/lib/get-content'

const siteUrl = 'https://stanleyarmstrong.com'
const title = 'Stanley Armstrong | Fractional Full-Stack Development & Automation Partner'
const description = 'I help operations-heavy businesses and lean startup teams ship full-stack products and build automation that saves thousands of hours a year — as an embedded partner, not a one-off contractor.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Stanley Armstrong',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const content = getContent()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Stanley Armstrong',
    url: siteUrl,
    jobTitle: content?.intro?.[0] ?? 'Fractional Full-Stack Development & Automation Partner',
    description,
    sameAs: content?.socials?.map((social) => social.url) ?? [],
    knowsAbout: Array.from(
      new Set(content?.services?.flatMap((service) => service.tools ?? service.focusAreas ?? []) ?? [])
    ),
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('darkMode');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = stored !== null ? stored === 'true' : prefersDark;
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
