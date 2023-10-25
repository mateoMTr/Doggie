import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doggie',
  description: 'Asi como ellos son tu felicidad, ellos tmb merecen un poco de regreso',
  icons:{
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: "./logoMorado.svg",
        href: "./logoMorado.svg"
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: "./svg.svg",
        href: "./svg.svg"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={'dark:bg-[#1F1F1F] overflow-y-visible max-h-full max-w-full '}>
      <body className={`dark:bg-[#1F1F1F]`}>
        <ThemeProvider
            attribute={'class'}
            defaultTheme={'system'}
            enableSystem
            disableTransitionOnChange
            storageKey={'doggie-theme'}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
