import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '5D Solutions | Digital Marketing Agency',
  description: 'Transform your digital presence with 5D Solutions. Expert SEO, Social Media Marketing, PPC, Content Marketing, and Web Development services.',
  keywords: 'digital marketing, SEO, social media marketing, PPC, content marketing, web development, branding',
  authors: [{ name: '5D Solutions' }],
  openGraph: {
    title: '5D Solutions | Digital Marketing Agency',
    description: 'Transform your digital presence with 5D Solutions. Expert digital marketing services to grow your business online.',
    url: 'https://5dsolutions.com',
    siteName: '5D Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5D Solutions | Digital Marketing Agency',
    description: 'Transform your digital presence with 5D Solutions. Expert digital marketing services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://5dsolutions.com" />
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "5D Solutions",
            "description": "Digital Marketing Agency specializing in SEO, Social Media Marketing, PPC, and Web Development",
            "url": "https://5dsolutions.com",
            "logo": "https://5dsolutions.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-234-567-8900",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://facebook.com/5dsolutions",
              "https://twitter.com/5dsolutions",
              "https://linkedin.com/company/5dsolutions"
            ]
          })}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}