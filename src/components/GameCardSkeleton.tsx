import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card borderRadius={10} overflow="hidden">
        <Skeleton height={"200px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
