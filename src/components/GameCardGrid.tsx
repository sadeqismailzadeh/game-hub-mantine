import { useEffect, useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import apiClient from '@/services/apiClient';
import CardDemo from './GameCard';


// interface FetchGamesResponse

export function CardGrid() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient.get('/games').then (res => );
  }, []);
  return (
    <SimpleGrid cols={3}>
      <CardDemo />
      <CardDemo />
      <CardDemo />
      <CardDemo />
      {/* <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div> */}
    </SimpleGrid>
  );
}
