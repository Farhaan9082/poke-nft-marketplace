"use client";

import {
  ConnectWallet,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0xD1fD2e89560Ff5A3a71b5fE0B56bD922BB95f627",
  );

  const address = useAddress();

  const { data: nfts } = useOwnedNFTs(contract, address);

  return (
    <main>
      <h1>Hello world</h1>
      <ConnectWallet />
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>{nft.metadata.name}</div>
      ))}
    </main>
  );
};

export default Home;
