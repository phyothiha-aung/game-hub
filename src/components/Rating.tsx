import { HStack } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <HStack marginBottom={3}>
      {stars.map((star) => (
        <span key={star} style={{ color: "gold" }}>
          {star > rating ? <AiOutlineStar /> : <AiFillStar />}
        </span>
      ))}
    </HStack>
  );
};

export default Rating;
