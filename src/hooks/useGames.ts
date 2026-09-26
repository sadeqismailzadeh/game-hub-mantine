import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";
import genres, { Genre } from "@/data/genres";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<Game>("/games", {
    params: { category: selectedGenre?.slug },
  },
[selectedGenre?.slug]);
  return { games: data, data, error, isLoading };
};

const useGames2 = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
