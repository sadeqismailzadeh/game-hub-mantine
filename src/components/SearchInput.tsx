
import { TextInput } from "@mantine/core";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs"; 

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <TextInput
      leftSection={<BsSearch />}
      placeholder="Search articles..."
      ref={ref}>
      </TextInput>
    </form>
  );
};

export default SearchInput;
