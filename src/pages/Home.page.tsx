import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CardDemo from '@/components/GameCard';
import { CardGrid } from '@/components/GameCardGrid';
import { Welcome } from '../components/Welcome/Welcome';
import GameCardSkeleton from '@/components/GameCardSkeleton';
import ColorSchemeToggle from '@/components/ColorSchemeToggle';
import NavBar from '@/components/NavBar';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
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
        Navbar is collapsed on mobile at sm breakpoint. At that point it is no longer offset by
        padding in the main element and it takes the full width of the screen when opened.
      </AppShell.Navbar>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text>Layout used in most cases – Navbar and Header with fixed position</Text>
        {/* <CardDemo /> */}
        {/* <Welcome /> */}
        <CardGrid />
        
      </AppShell.Main>
    </AppShell>
  );
}
