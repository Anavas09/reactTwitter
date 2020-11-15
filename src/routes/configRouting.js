import Error404 from "../page/Error";
import Home from "../page/Home";
import User from "../page/User";

const pagesRoutes = [
  {
    path: "/:id",
    exact: true,
    page: User,
  },
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