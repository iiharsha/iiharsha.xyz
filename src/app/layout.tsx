import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harshavardhan Vadluri",
    template: "%s | Harshavardhan Vadluri"
  },
  description: "Software Engineer turning ideas into products.",
  openGraph: {
    title: "Harshavardhan Vadluri",
    description: "Software Engineer turning ideas into products.",
    url: "https://www.iiharsha.xyz",
    siteName: "Harshavardhan Vadluri",
    locale: "en_US",
    type: "website",
    images: ["https://www.iiharsha.xyz/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Harshavardhan Vadluri",
    card: "summary_large_image",
    creator: "@iiharsha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} antialiased min-h-screen font-saira relative`}
      >
        <div className="bgart fixed inset-0 -z-999 pointer-events-none " />
        <div className="max-w-4xl mx-auto px-4 py-8 relative z-10 bg-background">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
