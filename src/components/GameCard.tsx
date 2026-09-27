import useGames, { Game } from "@/hooks/useGames"; 
import apiClient from "@/services/api-client";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { text } from "node:stream/consumers";
import { useEffect, useState } from "react";
import PlatformIconList from "./PlatformIconList";
import { getImageURL } from "../services/ImageURL";


interface Props {
  game: Game;

}

function CardDemo({game }: Props) {
// function CardDemo() {
  // const {games , error} = useGames();
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Image
          src={getImageURL(game.thumbnail)}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
         <Text fw={500}>{game.title}</Text>
      </Group>
      <PlatformIconList platform={game.platform} />
    </Card>
  );
}

export default CardDemo;
