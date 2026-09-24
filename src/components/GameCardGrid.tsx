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
  const {games , error} = useGames();

  // useEffect(() => {
  //   apiClient.get('/games').then (res => );
  // }, []);
  return (
    <SimpleGrid cols={3}>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          // <li key={game.id}> {game.title}</li> 
           <CardDemo key={game.id} game={game} />
        ))}
      </ul>
     
      {/* <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>  */}
    </SimpleGrid>
  );
}
