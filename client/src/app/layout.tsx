import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebulync Software Pvt Ltd | Custom Web & ERP Development",
  description: "Nebulync delivers cutting-edge Custom Web Development, ERP Solutions, Hotel Management, Fleet Management, Banquet Management, and Social Media Management. Explore BizFlow — our flagship ERP SaaS platform.",
  keywords: "Nebulync, web development, ERP, BizFlow, hotel management, fleet management, SaaS, software company",
  openGraph: {
    title: "Nebulync Software Pvt Ltd",
    description: "Innovative software solutions for the modern enterprise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
