"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider } from "thirdweb/react";

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

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <ThirdwebProvider>
            <main className="pb-16">
              {" "}
              {/* Add padding-bottom to account for BottomNav height */}
              {children}
            </main>
          </ThirdwebProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}