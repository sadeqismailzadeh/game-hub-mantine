
import { Group, Image } from "@mantine/core";
// import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";
import ColorSchemeToggle from "./ColorSchemeToggle";


interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Group>
      <SearchInput onSearch={onSearch} />
      <ColorSchemeToggle />
    </Group>
  );
};

export default NavBar;
