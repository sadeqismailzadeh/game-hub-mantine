import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu } from "@mantine/core";
import { GameQuery } from "@/temp/gameQuery";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  selectedOrder: string
}

const SortSelector = ({onSelectOrder, selectedOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "alphabetical", label: "Alphabetical" },
    { value: "release-date", label: "Release date" },
    { value: "popularity", label: "Popularity" },
  ];
  // const { platforms, error } = usePlatforms();

  // if (error) return null;
  const currentOrder = sortOrders.find((order) => order.value === selectedOrder)
  
  return (
    <Menu>
      <Menu.Target>
        <Button rightSection={<BsChevronDown size={16} />}>
          Order by: { currentOrder?.label ||  "Relevence"}
          {/* Order by: Relevence */}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {/* {platforms.map((platform) => (
          <Menu.Item key={platform.slug} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </Menu.Item>
        ))} */}
        {sortOrders.map((order) => (
          <Menu.Item key={order.value} value={order.value} onClick={() => onSelectOrder(order.value)}>
            {order.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default SortSelector;
