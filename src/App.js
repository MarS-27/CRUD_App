import NavBar from "./components/navigation/Navigation";
import Contacts from "./components/contacts/Contacts";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import useColorTheme from "./hooks/useColorTheme";
import ColorModeContext from "./context/themeContext";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from "./components/homePage/HomePage";

function App() {
  const { colorMode, theme } = useColorTheme();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />} /> 
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
