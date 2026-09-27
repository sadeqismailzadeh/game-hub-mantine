import "@mantine/core/styles.css";

import { Image, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import logo from "./assets/Logo/logo.webp";

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
function App() {
  const [opened, { toggle }] = useDisclosure();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group  justify="space-between">
            <Image src={logo} h={40} w="auto" fit="contain" />
            <NavBar onSearch={(text) => console.log("Searching for:", text)} />
          </Group>

          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => {
              setSelectedGenre(genre);
            }}
          />
        </AppShell.Navbar>
        <AppShell.Main>
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => {setSelectedPlatform(platform)}} />
          <CardGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
