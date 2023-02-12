import { RouteProps } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
];
