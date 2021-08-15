/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import Layout from "antd/lib/layout";
import HeaderComponent from "@EveryWorkflow/FrontendBundle/Component/HeaderComponent";
import FooterComponent from "@EveryWorkflow/FrontendBundle/Component/FooterComponent";

interface FrontendLayoutComponentProps {
    children?: JSX.Element | JSX.Element[];
}

const FrontendLayoutComponent = ({children}: FrontendLayoutComponentProps) => {
    return (
        <Layout>
            <HeaderComponent/>
            <Layout.Content>
                {children}
            </Layout.Content>
            <FooterComponent/>
        </Layout>
    );
}

export default FrontendLayoutComponent;
