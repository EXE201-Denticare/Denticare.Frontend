import { Plus_Jakarta_Sans as FontSans } from "next/font/google"

import { auth } from "@/auth"
import { constructMetadata } from "@/configs/site.config"
import AuthProvider from "@/providers/auth-provider"
import { ReactQueryClientProvider } from "@/providers/react-query-client-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import TailwindIndicator from "@/tools/tailwind-indicator"
import NextTopLoader from "nextjs-toploader"

import { cn } from "@/lib/utils"

import { Toaster } from "@/components/ui/sonner"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata = constructMetadata()

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider session={session}>
          <ReactQueryClientProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <Toaster position="top-right" />
              <NextTopLoader height={4} color="#3b82f6" />
              <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
                <div className="flex h-full flex-1 flex-col">{children}</div>
              </main>
              <TailwindIndicator />
            </ThemeProvider>
          </ReactQueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
