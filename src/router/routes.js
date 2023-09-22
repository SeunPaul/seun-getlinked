import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Redirect from "./Redirect";

const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/timeline",
    component: Home,
  },
  {
    path: "/overview",
    component: Home,
  },
  {
    path: "/faqs",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "*",
    component: Redirect,
  },
];

export default routes;
