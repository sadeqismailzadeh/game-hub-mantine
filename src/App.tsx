import "@mantine/core/styles.css";

import { Image, MantineProvider } from "@mantine/core";
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
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { platform } from "node:os";
import { GameQuery } from "./temp/gameQuery";
import SortSelector from "./components/SortSelector";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
            <NavBar onSearch={(searchedText) => setGameQuery({ ...gameQuery, searchedText})} />

          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </AppShell.Navbar>
        <AppShell.Main>
          <Group gap="md" mb="md">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />
            <SortSelector
              selectedOrder={gameQuery.sortOrder}
              onSelectOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            />
          </Group>

          <CardGrid gameQuery={gameQuery} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
