import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "./pages";
import "./App.css";
import { SiteLayout } from "./layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SiteLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
};

export default App;
