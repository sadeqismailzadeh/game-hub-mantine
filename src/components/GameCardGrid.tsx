import { useEffect, useState } from "react";
import { SimpleGrid } from "@mantine/core";
// import apiClient from '../services/apiClient';
import CardDemo from "./GameCard";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import useGames, { Game } from "@/hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/data/genres";
import { Platform } from "@/hooks/usePlatforms";
import { GameQuery } from "@/temp/gameQuery";

// interface FetchGamesResponse

interface Props {
  gameQuery: GameQuery
}

export function CardGrid({gameQuery }: Props) {
  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState([]);
  const { games, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  // useEffect(() => {
  //   apiClient.get('/games').then (res => );
  // }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {isLoading &&
          skeletons.map((skeleton) => {
            return <GameCardSkeleton key={skeleton} />;
          })}
        {games.map((game) => (
          <CardDemo key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
