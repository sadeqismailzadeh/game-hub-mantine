

import { Genre } from "@/data/genres";
import useGenres from "@/hooks/useGenres";
import { Anchor, Button, List, Loader, Title } from "@mantine/core";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre,onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Loader />; 

  return (
    <>
      <Title my="md">
        Genres
      </Title>
      <List>
        {data.map((genre) => (
          <List.Item key={genre.slug}>
            <Anchor
              component="button"
              type="button"
              underline="hover"    
              size="md"
              fw={selectedGenre?.slug == genre.slug ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Anchor>
            {/* <Button onClick={() => onSelectGenre(genre)}
              variant="link"
            >
              {genre.name}
            </Button> */}
          </List.Item>
        ))}
      </List>
    </>
  );
};



export default GenreList;
