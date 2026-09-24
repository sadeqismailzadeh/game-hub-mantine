import { Card, Skeleton } from "@mantine/core";


const GameCardSkeleton = () => {
  return (
    <Card>
      <Card.Section>
        <Skeleton height={200} />
      </Card.Section>
    </Card>
  );
};

export default GameCardSkeleton;
