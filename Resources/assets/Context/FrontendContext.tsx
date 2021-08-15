/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import {createContext} from 'react';
import {panelState} from "@EveryWorkflow/AdminPanelBundle/Admin/State/PanelState";
import FrontendStateInterface from "@EveryWorkflow/FrontendBundle/Model/FrontendStateInterface";

export interface FrontendContextInterface {
    state: FrontendStateInterface;
    dispatch: any;
}

const FrontendContext = createContext<FrontendContextInterface>({
    state: panelState,
    dispatch: () => null,
});

export default FrontendContext;
