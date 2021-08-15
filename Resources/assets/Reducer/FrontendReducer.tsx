/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import FrontendStateInterface from "@EveryWorkflow/FrontendBundle/Model/FrontendStateInterface";
import AlertAction from "@EveryWorkflow/CoreBundle/Action/AlertAction";

export const ACTION_ADD_ALERT_DATA = 'add_alert_data';

interface PanelActionInterface {
    type: string;
    payload: any;
}

const FrontendReducer = (
    state: FrontendStateInterface,
    action: PanelActionInterface
) => {
    switch (action.type) {
        case ACTION_ADD_ALERT_DATA: {
            AlertAction(action.payload);
            return {
                ...state,
                alert_data: [action.payload, ...state.alert_data],
            };
        }
        default:
            return state;
    }
};

export default FrontendReducer;
