/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { createContext } from 'react';
import { frontendState } from "@EveryWorkflow/FrontendBundle/State/FrontendState";
import FrontendStateInterface from "@EveryWorkflow/FrontendBundle/Model/FrontendStateInterface";

export interface FrontendContextInterface {
    state: FrontendStateInterface;
    dispatch: any;
}

const FrontendContext = createContext<FrontendContextInterface>({
    state: frontendState,
    dispatch: () => null,
});

export default FrontendContext;
