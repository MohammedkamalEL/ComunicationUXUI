import Navbar from "./component/Navbar";
import RightSide from "./component/RightSide";
import LeftSide from "./component/LeftSide";
import Feed from "./component/Feed";
import { Box, Stack } from "@mui/material";
import Add from "./component/Add";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";


function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Box color={'text.primary'} bgcolor={'background.default'}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <RightSide setMode={setMode} mode={mode} />
            <Feed />
            <LeftSide />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
