import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul-Rashid Dasana Abdulai — AI in Healthcare",
  description: "Medical student with computer engineering background, researching AI adoption in low-resource healthcare; projects include AI barriers study (Cuba) and a GMDC prep assistant (Ghana).",
  openGraph: {
    title: "Abdul-Rashid Dasana Abdulai — AI in Healthcare",
    description: "Medical student with computer engineering background, researching AI adoption in low-resource healthcare.",
    url: "https://laseeru.github.io/my_portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul-Rashid Dasana Abdulai — AI in Healthcare",
    description: "Medical student with computer engineering background, researching AI adoption in low-resource healthcare.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
