import { Web3Button, useAddress } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/constants";
import { useTheme } from "next-themes";

interface CustomWeb3ButtonProps {
  children: React.ReactNode;
}

export const CustomWeb3Button = ({ children }: CustomWeb3ButtonProps) => {
  const { theme } = useTheme();
  const themeValue = theme === "light" ? "light" : "dark";
  const address = useAddress();

  return (
    <>
      {address ? (
        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => contract.erc1155.claim(0, 1)}
          theme={themeValue}
          className="!w-full"
        >
          {children}
        </Web3Button>
      ) : (
        <p className="w-full text-center text-sm select-none">
          Wallet Connection Required
        </p>
      )}
    </>
  );
};
