import React from "react";
import { Box, Text, Button, Input } from "../components/base";
import { colors } from "../theme";
import { Layout, Head } from "../components/elements";

const SearchView = () => {
  return (
    <Layout>
      
      <Head title="Search"  mb={3} />  

      <Input bg={colors.white} p={3} placeholder="Artists, song, or podcasts" />

      <Head title="Your top genres" fontSize={16} my={3} />

      


    </Layout>
  );
};

export default SearchView;
