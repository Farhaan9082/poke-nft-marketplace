import { useAddress } from "@thirdweb-dev/react";
import { PropsWithChildren } from "react";

export const ButtonWrapper = ({ children }: PropsWithChildren) => {
  const address = useAddress();

  if (address) {
    return children;
  } else {
    return (
      <p className="w-full text-center text-sm select-none">
        Wallet Connection Required
      </p>
    );
  }
};
