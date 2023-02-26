import { type RouteProps } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
