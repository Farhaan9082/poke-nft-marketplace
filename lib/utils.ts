import { pokemonIds } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generatePokemonId = () => {
  const random = Math.random();
  const probabilities = [0.49, 0.25, 0.15, 0.1, 0.01];

  let cumulativeProbability = 0;
  for (let i = 0; i < probabilities.length; i++) {
    cumulativeProbability += probabilities[i];
    if (random < cumulativeProbability) {
      return pokemonIds[i][Math.floor(Math.random() * pokemonIds[i].length)];
    }
  }

  return 18;
};
