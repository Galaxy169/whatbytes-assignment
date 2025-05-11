import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ReduxProvider } from "./redux/store/provider";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s - WhatBytes",
    default: "Buy Anything - WhatBytes",
  },
  description:
    "Ecommerence store, buy all kind of product at the cheapest price.",
  authors: [{ name: "Aadil Ansari" }],
  openGraph: {
    title: "WhatBytes | Online Store",
    description:
      "Ecommerence store, buy all kind of product at the cheapest price",
    url: "https://whatbytes-assignment-tawny.vercel.app/",
    siteName: "WhatBytes | Online Store",
    locale: "en-US",
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

  category: "ecommerce",
  metadataBase: new URL("https://whatbytes-assignment-tawny.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
