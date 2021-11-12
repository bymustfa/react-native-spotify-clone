import React from "react";
import { Image } from "react-native";
import { Box, Text, Button } from "../base";
import { colors, radius } from "../../theme";

export default function PlaylistGridItem({
  href = null,
  image = "",
  name = "",
}) {
  return (
    <Box flexDirection="row" justifyContent="flex-start" width="50%" p={1}>
      <Button
        bg={colors.darkGrey}
        borderRadius={radius.normal}
        width="100%"
        justifyContent="flex-start"
      >
        <Box
          width={56}
          height={56}
          borderBottomLeftRadius={radius.normal}
          borderTopLeftRadius={radius.normal}
        >
          <Image
            style={{
              width: 56,
              height: 56,
              borderTopLeftRadius: radius.normal,
              borderBottomLeftRadius: radius.normal,
            }}
            source={{
              uri: image,
            }}
          />
        </Box>
        <Box px={2}>
          <Text fontWeight="bold" color={colors.white}>
            {name}
          </Text>
        </Box>
      </Button>
    </Box>
  );
}
