import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import WrapperContainer from "./components/WrapperContainer/styled";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <WrapperContainer>
      <Sidebar />
      <MainSection />
    </WrapperContainer>
  </ThemeProvider>
);

export default App;
