import React from "react";
import { Layout, Head } from "../components/elements";
import { Box, Text } from "../components/base";
import {
  HomeHeader,
  GridPlaylist,
  CarouselPlaylist,
} from "../components/partials";

const HomeView = () => {
  return (
    <Layout>
      <HomeHeader />

      <GridPlaylist />

      <Box mb={25} />
      <CarouselPlaylist />
    </Layout>
  );
};

export default HomeView;
