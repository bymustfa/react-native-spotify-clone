import React from "react";
import { Box, Text } from "../base";
import { colors } from "../../theme";

export default function Head({ title = "", ...props }) {
  return (
    <>
      <Text fontWeight="bold" fontSize={22} color={colors.white} {...props}>
        {title}
      </Text>
    </>
  );
}
