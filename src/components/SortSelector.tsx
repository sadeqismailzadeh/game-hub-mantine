import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu } from "@mantine/core";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatform: Platform | null
// }

const SortSelector = () => {
  // const { platforms, error } = usePlatforms();

  // if (error) return null;

  return (
    <Menu>
      <Menu.Target>
        <Button rightSection={<BsChevronDown size={16} />}>
        {/* {selectedPlatform?.slug || "Order by: Relevence"} */}
        Order by: Relevence
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {/* {platforms.map((platform) => (
          <Menu.Item key={platform.slug} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </Menu.Item>
        ))} */}
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Item>3</Menu.Item>
        <Menu.Item>4</Menu.Item>
        <Menu.Item>5</Menu.Item>
        <Menu.Item>6</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default SortSelector;
