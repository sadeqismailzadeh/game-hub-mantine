import useGames, {Game} from "@/hooks/useGame";
import apiClient from "@/services/api-client";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { text } from "node:stream/consumers";
import { useEffect, useState } from "react";


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
          src={game.thumbnail}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
         <Text fw={500}>{game.title}</Text>
        {/* <Badge color="pink">On Sale</Badge> */}
      </Group>

      <Text size="sm" c="dimmed">
        {/* With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway */}

      </Text>
    </Card>
  );
}

export default CardDemo;
