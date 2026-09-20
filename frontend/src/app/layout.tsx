import './globals.css'

export const metadata = {
  title: 'Stanley Armstrong | Fractional Full-Stack Development & Automation Partner',
  description: 'I help operations-heavy businesses and lean startup teams ship full-stack products and build automation that saves thousands of hours a year — as an embedded partner, not a one-off contractor.',
  openGraph: {
    title: 'Stanley Armstrong | Fractional Full-Stack Development & Automation Partner',
    description: 'I help operations-heavy businesses and lean startup teams ship full-stack products and build automation that saves thousands of hours a year.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  )
}
