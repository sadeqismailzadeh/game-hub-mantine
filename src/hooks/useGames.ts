import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";
import genres, { Genre } from "@/data/genres";
import { Platform } from "./usePlatforms";
import { GameQuery } from "@/temp/gameQuery";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        category: gameQuery.genre?.slug,
        platform: gameQuery.platform?.slug,
        "sort-by": gameQuery.sortOrder,
      },
    },
    [gameQuery],
  );
  return { games: data, data, error, isLoading };
};

export default useGames;
