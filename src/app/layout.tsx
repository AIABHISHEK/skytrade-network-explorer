import { GAScript } from "@/components/GAScript"
import { GATracker } from "@/components/GATracker"
import { Header } from "@/components/Header"
import { HotspotsMap } from "@/components/HotspotsMap"
import { Providers } from "@/components/Providers"
import "@/styles/tailwind.css"
import "focus-visible"
import Head from "next/head"
import { Suspense } from "react"
import "react-tooltip/dist/react-tooltip.css"

export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "64x64 32x32 24x24 16x16",
      },
      {
        url: "/logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: "Helium Explorer",
    description: "Skytrade Network explorer",
    url: "https://skytrade-network-explorer.vercel.app/",
    siteName: "Skytrade Explorer",
    images: [
      {
        url: "/og.png",
        width: 954,
        height: 696,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const toggleTab = () => {
    return
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="preconnect"
          href="https://pmtiles.heliumfoundation.wtf/"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://pmtiles.heliumfoundation.wtf/" />
      </Head>
      <body className="absolute inset-0 bg-zinc-50 dark:bg-black">
        <Providers>
          <GAScript />
          {/* 
            Wrapping in supsense to avoid pages getting deopted into client-side rendering
            https://nextjs.org/docs/messages/deopted-into-client-rendering
          */}
          <Suspense>
            <GATracker />
          </Suspense>
          <Header toggleTab={toggleTab} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
