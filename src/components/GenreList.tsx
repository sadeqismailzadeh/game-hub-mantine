

import { Genre } from "@/data/genres";
import useGenres from "@/hooks/useGenres";
import { Button, List, Loader, Title } from "@mantine/core";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Loader />; 

  return (
    <>
      <Title>
        Genres
      </Title>
      <List>
        {data.map((genre) => (
          <List.Item key={genre.slug}>
            <Button onClick={() => onSelectGenre(genre)}
              variant="link"
            >
              {genre.name}
            </Button>
          </List.Item>
        ))}
      </List>
    </>
  );
};



export default GenreList;
