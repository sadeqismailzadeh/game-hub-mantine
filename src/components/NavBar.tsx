import { Group, Image } from "@mantine/core";
import SearchInput from "./SearchInput";
import ColorSchemeToggle from "./ColorSchemeToggle";
import logo from "@/assets/Logo/logo.webp";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Group justify="space-between" p="xs">
      <Group>
        <Image src={logo} h={40} w="auto" fit="contain" />
        <SearchInput />
      </Group>
      <ColorSchemeToggle/>
    </Group>
  );
};

export default NavBar;
