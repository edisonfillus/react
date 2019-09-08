import Home from "./home/Home";
import News from "./news/News";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    component: News
  }
];

export default routes;