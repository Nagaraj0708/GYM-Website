import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FiFusion Studio | Premium Athletic & High-Performance Gym",
  description: "Experience high-performance strength training, spin cycling, HIIT, and recovery at FiFusion Studio. Book your free 3-day trial pass today.",
  keywords: ["gym", "fitness studio", "strength training", "spin class", "HIIT", "personal training", "FiFusion Fitness", "recovery studio"],
  authors: [{ name: "FiFusion Studio" }],
  openGraph: {
    title: "FiFusion Studio | Sculpt Your Body, Elevate Your Spirit",
    description: "Unleash your ultimate fitness limits with state-of-the-art equipment, world-class trainers, and custom athletic programming.",
    url: "https://fifusion.com",
    siteName: "FiFusion Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FiFusion Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FiFusion Studio",
    description: "Unleash your ultimate fitness limits with state-of-the-art equipment and elite trainers.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} dark h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ExerciseGym",
              name: "FiFusion Studio",
              image: "https://fifusion.com/logo.svg",
              description: "Premium fitness studio offering strength training, spin cycling, HIIT, yoga, and elite athletic coaching.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "450 Athletic Way",
                addressLocality: "Metro District",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              url: "https://fifusion.com",
              telephone: "+1-800-895-3848",
            }),
          }}
        />
      </head>
      <body className="bg-[#08080A] text-[#F5F5F5] font-body selection:bg-[#C0E837] selection:text-[#08080A] antialiased">
        {children}
      </body>
    </html>
  );
}
