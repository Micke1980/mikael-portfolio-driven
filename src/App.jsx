import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./utils/theme";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import License from "./components/License";

const myTheme = createTheme(themeOptions);

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
  <Route index element={<HomePage />} errorElement={<NotFound />} />
  <Route path="/license" element={<License />} />
  {/* Example route to ad if you want */}
  {/* <Route path="about" element={<AboutPage />} errorElement={<NotFound />} /> */}
</Route>
);
const router = createBrowserRouter(routesFromElements);

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
