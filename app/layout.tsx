// this replaces _app.tsx and _document.tsx
import './globals.css'
import { Dela_Gothic_One } from 'next/font/google'
// TODO: do the favicon

const delaGothicOne = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-delaGothicOne'
})

export const metadata = {
  title: 'BMI Calculator',
  description: 'Calculate your BMI',
  robots: 'noindex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={delaGothicOne.variable}>
      <body>{children}</body>
    </html>
  )
}
