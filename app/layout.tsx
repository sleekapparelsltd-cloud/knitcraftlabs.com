
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as HotToaster } from 'react-hot-toast'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { CartProvider } from '@/components/cart-provider'
import { CartSidebar } from '@/components/cart-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KnitCraft Labs - Your One-Stop Apparel Manufacturer & Sourcing Partner in Bangladesh',
  description: 'Professional apparel manufacturing with low MOQs from 50 pieces. Private labeling, ethical production, rush uniform options for startups. Trusted by 50+ brands in 25+ countries.',
  keywords: 'low MOQ apparel manufacturing, private label manufacturing, Nordic school uniforms, sample development 7 days, ethical apparel production, Bangladesh manufacturer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NFTTPMBM');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFTTPMBM"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloat />
            <CartSidebar />
            <Toaster />
            <HotToaster position="top-right" />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
