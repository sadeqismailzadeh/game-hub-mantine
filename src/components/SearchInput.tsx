import { TextInput } from "@mantine/core";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <TextInput
      placeholder="Search games..."
      leftSection={<BsSearch />}
    ></TextInput>
  );
};

export default SearchInput;
