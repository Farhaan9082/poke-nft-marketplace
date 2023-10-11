"use client";

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { PropsWithChildren } from "react";

const activeChain = "mumbai";

export const ThirdwebWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[metamaskWallet()]}
    >
      {children}
    </ThirdwebProvider>
  );
};
