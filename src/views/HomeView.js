import React from "react";
import { Box, Text, Button } from "../components/base";

const HomeView = (props) => {
  return (
    <>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text>HOME PAGE</Text>
        <Button>
          <Text>-----</Text>
        </Button>
      </Box>
    </>
  );
};

export default HomeView;
