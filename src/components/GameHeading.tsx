
import { Title } from "@mantine/core";
import { GameQuery } from "./GameQuery";

interface Props {
  gameQuery: GameQuery; 
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Title>
      {heading}
    </Title>
  );
};

export default GameHeading;
