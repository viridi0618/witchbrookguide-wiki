import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Witchbrook Guide: Release, Platforms, Co-op & Gameplay", template: "%s" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: siteConfig.name, title: "Witchbrook Guide: Release, Platforms, Co-op & Gameplay", description: siteConfig.description, url: absoluteUrl(), images: [{ url: siteConfig.ogImage, width: 800, height: 450, alt: "Witchbrook Guide — Life at Witchbrook" }] },
  twitter: { card: "summary_large_image", title: "Witchbrook Guide", description: siteConfig.description, images: [siteConfig.ogImage] },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#17132b", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google70d2f5ada7903a5f.html" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FBNK6579W2"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FBNK6579W2');`,
        }} />
      </head>
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
