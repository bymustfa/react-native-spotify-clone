import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "../base";
import { colors } from "../../theme";
import { Setting2, Notification, Radar2 } from "iconsax-react-native";
import { Head } from "../elements";

export default function HomeHeader(props) {
  const [label, setLabel] = useState("Good Evening");

  useEffect(() => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setLabel("Good Morning");
    } else if (curHr < 18) {
      setLabel("Good Afternoon");
    } else {
      setLabel("Good Evening");
    }
  }, []);

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Head title={label} />
      <Box flexDirection="row" justifyContent="space-between" minWidth="28%">
        <Button>
          <Notification size="24" color={colors.white} />
        </Button>
        <Button>
          <Radar2 size="24" color={colors.white} />
        </Button>
        <Button>
          <Setting2 size="24" color={colors.white} />
        </Button>
      </Box>
    </Box>
  );
}
