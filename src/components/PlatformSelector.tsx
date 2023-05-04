import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/api-client";

interface PlatformDelectorProps {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformDelectorProps) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {selectedPlatform?.name || "All Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)}>
          All Platforms
        </MenuItem>
        {data.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
