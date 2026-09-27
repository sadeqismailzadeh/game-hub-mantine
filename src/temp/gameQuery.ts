import { Genre } from "@/data/genres";
import { Platform } from "@/hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}