import React from "react";
import { Box, Text, Button } from "../components/base";
import { Layout } from "../components/elements";
import { colors } from "../theme";

const YourLibraryView = (props) => {
  return (
    <>
      <Layout>
        <Text color={colors.white}>LIBRARY PAGE</Text>
        <Button>
          <Text color={colors.white}>-----</Text>
        </Button>
      </Layout>
    </>
  );
};

export default YourLibraryView;
