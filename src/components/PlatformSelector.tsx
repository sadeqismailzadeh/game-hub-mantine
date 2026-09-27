// ============================================================================
// components/PlatformSelector.tsx — DROPDOWN MENU FOR CHOOSING A PLATFORM
// ============================================================================
// Same "lifted state" pattern as GenreList, but rendered as a Chakra
// <Menu> (dropdown) instead of a list of buttons.
// ============================================================================

import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu } from "@mantine/core";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <Menu.Target>
        <Button rightSection={<BsChevronDown size={16} />}>
        {selectedPlatform?.slug || "Platforms"}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {platforms.map((platform) => (
          <Menu.Item key={platform.slug} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default PlatformSelector;
