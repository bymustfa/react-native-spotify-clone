import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../theme";
import { Box } from "../base";

export default function Layout({ children }) {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.darkestGrey} />
      <Box as={SafeAreaView} pt={35} px={1} flex={1} bg={colors.darkestGrey}>
        <Box px={1} as={ScrollView} showsVerticalScrollIndicator={false}>
          {children}
        </Box>
      </Box>
    </>
  );
}
