import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get("/games", { signal: controller.signal })
      .then((res) => setGames(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
