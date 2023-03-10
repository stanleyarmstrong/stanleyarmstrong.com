import './globals.css'

export const metadata = {
  title: 'Stanley Armstrong Portfolio',
  description: 'Built with Next.ts, TailwindCSS, and Django',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
