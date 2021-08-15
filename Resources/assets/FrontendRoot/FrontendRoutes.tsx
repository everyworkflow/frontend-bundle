/*
 * @copyright EveryWorkflow. All rights reserved.
 */

// import {lazy} from "react";
import HomePage from "@EveryWorkflow/FrontendBundle/Page/HomePage";

// const HomePage = lazy(() => import("@EveryWorkflow/FrontendBundle/Page/HomePage"));

export const FrontendRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
];
