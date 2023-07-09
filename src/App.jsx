import Header from "./components/header";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
