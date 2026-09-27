import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";
import genres, { Genre } from "@/data/genres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: { category: selectedGenre?.slug, platform: selectedPlatform?.slug },
    },
    [selectedGenre?.slug, selectedPlatform?.slug],
  );
  return { games: data, data, error, isLoading };
};

export default useGames;
