"use client";

import { CustomWeb3Button } from "@/components/CustomWeb3Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONTRACT_ADDRESS } from "@/constants";
import { generatePokemonId } from "@/lib/utils";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="w-full bg-[url('/pokemon-background.jpg')] bg-cover bg-no-repeat bg-top rounded-lg border">
      <div className="bg-background/50 h-full flex items-center justify-center">
        <Card>
          <CardHeader className="pb-3 border-b">
            <CardTitle>Hatch Probability</CardTitle>
            <CardDescription>All gen 1 pokémons available</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pt-4">
            <div className="flex justify-between text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 bg-[#808080] rounded-sm"></div>
                <p>Common</p>
              </div>
              <p>49%</p>
            </div>
            <div className="flex justify-between text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 bg-[#2ecc71] rounded-sm"></div>
                <p>Uncommon</p>
              </div>
              <p>25%</p>
            </div>
            <div className="flex justify-between text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 bg-[#3498db] rounded-sm"></div>
                <p>Rare</p>
              </div>
              <p>15%</p>
            </div>
            <div className="flex justify-between text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 bg-[#9b59b6] rounded-sm"></div>
                <p>Epic</p>
              </div>
              <p>10%</p>
            </div>
            <div className="flex justify-between text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 bg-[#e67e22] rounded-sm"></div>
                <p>Legendary</p>
              </div>
              <p>1%</p>
            </div>
          </CardContent>
          <CardFooter>
            <CustomWeb3Button>Hatch a pokemon</CustomWeb3Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Home;
