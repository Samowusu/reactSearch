import React from "react";
import FilterIcon from "../assets/svgs/FilterIcon";
import { Button } from "./commons/Button";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import FilterItem from "./FilterItem";

interface FilterPanelProps {
  onCancel?: () => void;
}
const FilterPanel = ({ onCancel }: FilterPanelProps) => {
  return (
    <Container
      width="300px"
      height="100vh"
      flexDirection="column"
      position="absolute"
      zIndex="10"
      right="0"
      bg="#fff"
      overflow="auto"
    >
      {/* header */}
      <Container bg="#F5F7F8" alignItems="center" padding="10px">
        <FilterIcon />
        <Container
          flexDirection="column"
          width="auto"
          marginLeft="15px"
          margintRight="40px"
          gap="10px"
        >
          <Typography fontSize="20px" fontWeight="600" color="#3F474B">
            set parameters
          </Typography>
          <Typography fontSize="12px" color="#778FAB">
            9 parameters available
          </Typography>
        </Container>
        <Button>
          <Typography
            fontSize="12px"
            color="#0C67A0"
            fontWeight="600"
            textTransform="inherit"
          >
            Reset all
          </Typography>
        </Button>
      </Container>

      {/* content */}
      <Container
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
        paddingTop="10px"
      >
        <Container flexDirection="column">
          <FilterItem />
          <FilterItem title="Type" />
          <FilterItem title="Item" />
          <FilterItem title="Category" />
        </Container>

        {/* footer */}
        <Container justifyContent="space-around" bg="#F5F7F8" pV="15px">
          <Button onClick={onCancel}>
            <Typography
              fontSize="12px"
              color="#0C67A0"
              fontWeight="600"
              textTransform="inherit"
            >
              Cancel
            </Typography>
          </Button>
          <Button bg="#0C67A0" pH="35px" pV="8px" borderRadius="3px">
            <Typography fontSize="12px" color="#fff" fontWeight="500">
              apply
            </Typography>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default FilterPanel;
