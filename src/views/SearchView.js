import React from "react";
import { Box, Text, Button } from "../components/base";
import { colors } from "../theme";
import { Layout } from "../components/elements";

const SearchView = (props) => {
  return (
    <Layout>
      <Text color={colors.white}>SEARCH PAGE</Text>
      <Button>
        <Text>----</Text>
      </Button>
    </Layout>
  );
};

export default SearchView;
