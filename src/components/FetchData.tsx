import React from "react";
import { Button } from "./commons/Button";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";

interface FetchDataProps {
  onFetchData?: () => void;
}

const FetchData = ({ onFetchData }: FetchDataProps) => {
  return (
    <Container height="100%">
      <Container
        width="300px"
        margin="auto"
        flexDirection="column"
        alignItems="center"
        gap="15px"
      >
        <Typography fontSize="20px" fontWeight="600">
          what are you looking for
        </Typography>
        <Typography fontSize="12px" color="#778FAB">
          Get started by searching & filtering a few
        </Typography>
        <Button
          bg="#0C67A0"
          pH="35px"
          pV="8px"
          borderRadius="3px"
          onClick={onFetchData}
        >
          <Typography fontSize="12px" color="#fff" fontWeight="500">
            Fetch Data
          </Typography>
        </Button>
        <Container justifyContent="center" gap="10px">
          <Typography fontSize="12px" color="#778FAB" textTransform="lowercase">
            or
          </Typography>
          <Button>
            <Typography
              fontSize="12px"
              color="#0C67A0"
              fontWeight="500"
              textTransform="lowercase"
            >
              search for an item
            </Typography>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default FetchData;
