import type { Metadata } from "next";
import localFont from "next/font/local";
import {Raleway} from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"], // adjust weight as needed
  variable: "--font-raleway", // defining the variable for Raleway
});

export const metadata: Metadata = {
  title: "Moonex",
  description: "A crypto wallet management web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
