

import { Genre } from "@/data/genres";
import useGenres from "@/hooks/useGenres";
import { Button, List, Loader, Title } from "@mantine/core";


const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Loader />; // show a loading spinner while waiting

  return (
    <>
      {/* <>...</> is a React "Fragment" — lets us group multiple elements
          (Heading + List) without adding an extra, unnecessary <div>
          wrapper to the actual HTML output. */}
      <Title>
        Genres
      </Title>
      <List>
        {/* .map() turns each genre object into a <ListItem>. The `key`
            prop is REQUIRED by React whenever you render a list from an
            array — it helps React efficiently figure out which items
            changed/were added/were removed between renders, instead of
            re-rendering the whole list every time. Always use something
            stable and unique (here, genre.slug) — never the array index
            if the list can be reordered/filtered. */}
        {data.map((genre) => (
          <List.Item key={genre.slug}>
            <Button
              // onClick={() => onSelectGenre(genre)}
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
