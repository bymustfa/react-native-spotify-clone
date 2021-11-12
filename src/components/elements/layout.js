import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../theme";
import { Box } from "../base";

export default function Layout({ children }) {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.darkestGrey} />
      <Box as={SafeAreaView} pt={40} px={3} flex={1} bg={colors.darkestGrey}>
        {children}
      </Box>
    </>
  );
}
