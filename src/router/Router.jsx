import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
