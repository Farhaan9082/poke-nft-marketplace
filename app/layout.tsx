"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

const activeChain = "mumbai";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThirdwebProvider
          clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
          activeChain={activeChain}
          supportedWallets={[metamaskWallet()]}
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
