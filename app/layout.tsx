import { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "haitham-elm.vercel.app",
    template: "%s | chronark.com",
  },
  description: "développeur d'applications et de sites web",
  openGraph: {
    title: "haitham-elm.vercel.app",
    description: "développeur d'applications et de sites web",
    url: "https://haitham-elm.vercel.app",
    siteName: "haitham-elm.vercel.app",
    images: [
      {
        url: "https://haitham-elm.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Haitham",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
