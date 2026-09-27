import { GameQuery } from "@/temp/gameQuery";
import { Title } from "@mantine/core";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return <Title my="md" order={1}>{heading}</Title>;
};

export default GameHeading;
