import Error404 from "../page/Error";
import Home from "../page/Home";

const pagesRoutes = [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "*",
    page: Error404,
  },
];

export default pagesRoutes;