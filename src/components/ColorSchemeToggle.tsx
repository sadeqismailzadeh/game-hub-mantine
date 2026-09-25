import { Button, Group, useMantineColorScheme } from '@mantine/core';
import {Switch, Text } from "@mantine/core";


const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Switch
        color="green"
        checked={colorScheme === "dark"}
        onChange={toggleColorScheme}
      />
      <Text> Dark Mode</Text>
    </Group>
  );
};

export default ColorSchemeToggle;

