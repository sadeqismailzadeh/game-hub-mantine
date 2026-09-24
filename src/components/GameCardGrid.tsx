import { useEffect, useState } from "react";
import { SimpleGrid } from "@mantine/core";
// import apiClient from '../services/apiClient';
import CardDemo from "./GameCard";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import useGames, { Game } from "@/hooks/useGame";

// interface FetchGamesResponse

export function CardGrid() {
  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState([]);
  const { games, error } = useGames();

  // useEffect(() => {
  //   apiClient.get('/games').then (res => );
  // }, []);
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: "xl" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
    >
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <CardDemo key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
}
