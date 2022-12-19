import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import FontStyles from "./fontStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Structure from "./components/Structure/Structure";

const OrgStructureAp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FontStyles />
        <Structure />
      </ThemeProvider>
    </Provider>
  );
};

export default OrgStructureAp;
