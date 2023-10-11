"use client";

import { ConnectWallet } from "@thirdweb-dev/react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import { Card } from "./ui/card";

export const Navbar = () => {
  const { theme } = useTheme();
  const themeValue = theme === "light" ? "light" : "dark";

  return (
    <nav>
      <Card>
        <div className="flex justify-between items-center py-3 px-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            PokéNFT Marketplace
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <ConnectWallet
              theme={themeValue}
              switchToActiveChain={true}
              modalSize={"wide"}
            />
          </div>
        </div>
      </Card>
    </nav>
  );
};
