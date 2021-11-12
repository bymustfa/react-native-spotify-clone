import React from "react";
import { Layout } from "../components/elements";
import { Box } from "../components/base";
import { HomeHeader, PlaylistGridItem } from "../components/partials";

const HomeView = () => {
  return (
    <Layout>
      <HomeHeader />

      <Box flexDirection="row" flexWrap="wrap" mt={25}>
        <PlaylistGridItem
          name="KodCast"
          image="https://i.scdn.co/image/f06396bf21a6bc001aedfa64ad352b021973c403"
        />
        <PlaylistGridItem
          name="EQUAL"
          image="https://i.scdn.co/image/ab67706f000000033887020fc80f0baec7349373"
        />
        <PlaylistGridItem
          name="Transcend"
          image="https://i.scdn.co/image/ab67706f000000037f179784b432761e19e39dcd"
        />
        <PlaylistGridItem
          name="STILL SUCKS"
          image="https://i.scdn.co/image/ab67616d00001e027d51279f78e17fe253009f68"
        />
      </Box>
    </Layout>
  );
};

export default HomeView;
