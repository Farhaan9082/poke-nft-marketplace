"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CONTRACT_ADDRESS } from "@/constants";
import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { NextPage } from "next";

interface Attributes {
  trait_type: string;
  value: string;
}

const CollectionPage: NextPage = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const address = useAddress();
  const { data: nfts, isLoading } = useOwnedNFTs(contract, address);

  return (
    <section className="w-full rounded-lg border p-4">
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-full">
          <Skeleton className="flex" />
          <Skeleton className="flex" />
          <Skeleton className="flex" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts?.map((nft) => {
          const attributes: Attributes[] = nft.metadata.attributes as any;

          return (
            <Card key={nft.metadata.id} className="flex p-2 bg-green-500">
              <div className="rounded bg-background flex flex-col items-center">
                <div className="w-60">
                  <ThirdwebNftMedia metadata={nft.metadata} />
                </div>
                <h1>{nft.metadata.name}</h1>
                <p>{nft.metadata.description}</p>
                {attributes?.map(({ trait_type, value }) => (
                  <Card>
                    <p>{trait_type}</p>
                    <p>{value}</p>
                  </Card>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default CollectionPage;
