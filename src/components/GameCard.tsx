import apiClient from "@/services/api-client";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  title: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[]
}
function CardDemo() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get('/games')
    .then(res => setGames(res.data))
    .catch(err => setError(err.message))
  })

  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
        <ul>
          {games.map(game => <li key={game.id}> {game.title}</li>)}
        </ul>
      </Text>

      <Button color="blue" fullWidth mt="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

export default CardDemo;
