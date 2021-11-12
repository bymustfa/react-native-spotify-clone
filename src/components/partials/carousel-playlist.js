import React from "react";
import { ScrollView } from "react-native";
import { Head } from "../elements";
import { Box, Text, Button } from "../base";
import { Image } from "react-native";
import { colors, radius } from "../../theme";

export default function CarouselPlaylist({ title = "" }) {
  const range = (start, end) => {
    return Array.from({ length: end - start }, (v, k) => k + start);
  };

  const WIDTH = 150;

  return (
    <>
      <Box>
        <Head title={title} mb={3} />

        <Box
          flexDirection="row"
          as={ScrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {range(1, 11).map((item, index) => (
            <Button
              key={index}
              mr={3}
              width={WIDTH}
              flexDirection="column"
              alignItems="flex-start"
            >
              <Image
                style={{
                  width: "100%",
                  height: WIDTH,
                  borderRadius: radius.big,
                }}
                source={{
                  uri:
                    "https://i.scdn.co/image/f06396bf21a6bc001aedfa64ad352b021973c403",
                }}
              />
              <Box py={1}>
                <Text fontWeight="bold" color={colors.white}>
                  KodCast {item}
                </Text>

                <Text color={colors.grey} fontSize={12}>
                  Podcast - KodCast
                </Text>
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
}
