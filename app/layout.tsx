import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = { title: 'Oreofe Adelanwa — Full-stack developer', description: 'Oreofe Adelanwa builds AI-powered applications, backend systems, automations and web products.' }
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: '#F7F7F4', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}><body className="antialiased"><ThemeProvider>{children}</ThemeProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
