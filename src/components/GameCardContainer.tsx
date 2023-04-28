import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
