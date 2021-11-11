import React from "react";
import { Box, Text, Button } from "../components/base";
import { colors } from "../theme";
import { Home, SearchNormal1, MusicLibrary2 } from "iconsax-react-native";

const CustomTabBar = ({ state, descriptors, navigation, ...props }) => {
  const icons = {
    Home: {
      active: <Home size="24" variant="Bold" color={colors.white} />,
      passive: <Home size="24" color={colors.grey} />,
    },
    Search: {
      active: <SearchNormal1 size="24" variant="Bold" color={colors.white} />,
      passive: <SearchNormal1 size="24" color={colors.grey} />,
    },
    "Your Library": {
      active: <MusicLibrary2 size="24" variant="Bold" color={colors.white} />,
      passive: <MusicLibrary2 size="24" color={colors.grey} />,
    },
  };

  return (
    <Box flexDirection="row" bg={colors.darkGrey} py={10}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Button
            key={index + 1}
            onPress={onPress}
            onLongPress={onLongPress}
            flex={1}
            flexDirection="column"
          >
            <Box mb={1}>
              {isFocused ? icons[label].active : icons[label].passive}
            </Box>
            <Text
              fontSize={12}
              fontWeight="bold"
              color={isFocused ? colors.white : colors.grey}
            >
              {label}
            </Text>
          </Button>
        );
      })}
    </Box>
  );
};
export default CustomTabBar;
