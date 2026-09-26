import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";

import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CardDemo from "@/components/GameCard";
import { CardGrid } from "@/components/GameCardGrid";
import GameCardSkeleton from "@/components/GameCardSkeleton";
import ColorSchemeToggle from "@/components/ColorSchemeToggle";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { Genre } from "./data/genres";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null >(null)

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <NavBar onSearch={(text) => console.log("Searching for:", text)} />
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            Header has a burger icon below sm breakpoint
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <GenreList onSelectGenre={(genre) => {setSelectedGenre(genre)}} />
        </AppShell.Navbar>
        <AppShell.Main>
          <Text>This is the main section, your app content here.</Text>
          <Text>Layout used in most cases – Navbar and Header with fixed position</Text>
          {/* <CardDemo /> */}
          {/* <Welcome /> */}
          <CardGrid selectedGenre={selectedGenre} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
