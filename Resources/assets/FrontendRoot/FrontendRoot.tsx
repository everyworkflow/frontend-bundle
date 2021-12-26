/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTopOnRouteChange from "@EveryWorkflow/PanelBundle/Component/ScrollToTopOnRouteChange";
import FrontendLayoutComponent from "@EveryWorkflow/FrontendBundle/Component/FrontendLayoutComponent";
import RouteMapRenderComponent from "@EveryWorkflow/PanelBundle/Component/RouteMapRenderComponent";
import { RouteMaps } from "@EveryWorkflow/FrontendBundle/FrontendRoot/RouteMaps";
import FrontendContext from "@EveryWorkflow/FrontendBundle/Context/FrontendContext";
import FrontendReducer from "@EveryWorkflow/FrontendBundle/Reducer/FrontendReducer";
import { frontendState } from "@EveryWorkflow/FrontendBundle/State/FrontendState";
import RootPanelComponent from '@EveryWorkflow/PanelBundle/Component/RootPanelComponent';

const FrontendRoot = () => {
    const [state, dispatch] = useReducer(FrontendReducer, frontendState);

    return (
        <RootPanelComponent>
            <FrontendContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <ScrollToTopOnRouteChange>
                        <FrontendLayoutComponent>
                            <RouteMapRenderComponent routeMaps={RouteMaps} />
                        </FrontendLayoutComponent>
                    </ScrollToTopOnRouteChange>
                </BrowserRouter>
            </FrontendContext.Provider>
        </RootPanelComponent>
    );
};

export default FrontendRoot;
