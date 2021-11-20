import React from "react";
import {ScrollView} from "react-native";
import {Layout, Head} from "../components/elements";
import {Box, Text} from "../components/base";
import {
    HomeHeader,
    GridPlaylist,
    CarouselPlaylist,
} from "../components/partials";

const HomeView = () => {
    return (
        <Layout>
            <HomeHeader/>

            <GridPlaylist/>

            <Box mb={25}/>
            <CarouselPlaylist title="Your shows"/>
            <Box mb={25}/>
            <CarouselPlaylist title="Recommended for today"/>
            <Box mb={25}/>
            <CarouselPlaylist title="Recently played"/>
            <Box mb={25}/>
            <CarouselPlaylist title="Uniquely yours"/>
        </Layout>
    );
};

export default HomeView;
