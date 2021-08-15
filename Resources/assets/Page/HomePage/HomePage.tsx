/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import PageBuilderComponent from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent";

const HomePage = () => {
    const pageBuilderData = {
        block_data: [
            {
                block_type: 'container_block',
                style: {
                    backgroundColor: '#fff',
                    padding: '42px 0',
                },
                block_data: [
                    {
                        block_type: 'row_block',
                        justify: 'center',
                        align: 'middle',
                        style: {
                            backgroundColor: '#e6f7ff',
                            padding: 28,
                            borderRadius: 8,
                        },
                        block_data: [
                            {
                                block_type: 'col_block',
                                span: 12,
                                block_data: [
                                    {
                                        block_type: 'heading_block',
                                        content: 'Data platform',
                                    },
                                    {
                                        block_type: 'markdown_block',
                                        content: 'EveryWorkflow is bundle based data platform build using symfony and reactjs for modern data flow satisfying modern system needs.\n' +
                                            '\n- Content management system\n- Customer relationship management\n- Product information management\n- Digital asset management\n- Ecommerce system\n'
                                    },
                                ],
                            },
                            {
                                block_type: 'col_block',
                                span: 12,
                                style: {
                                    textAlign: 'center',
                                },
                                // offset: 8,
                                block_data: [
                                    {
                                        block_type: 'image_block',
                                        src: '/media/page-cover/first.png',
                                        alt: 'Image alt text',
                                    },
                                    {
                                        block_type: 'paragraph_block',
                                        content: 'One platform to build every thing'
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                block_type: 'container_block',
                block_data: [
                    {
                        block_type: 'row_block',
                        justify: 'center',
                        align: 'middle',
                        block_data: [
                            {
                                block_type: 'col_block',
                                span: 12,
                                style: {
                                    textAlign: 'center',
                                    padding: '28px 0',
                                },
                                block_data: [
                                    {
                                        block_type: 'heading_block',
                                        content: 'Data platform',
                                    },
                                    {
                                        block_type: 'markdown_block',
                                        content: 'EveryWorkflow is bundle based data platform build using symfony and reactjs for modern data flow satisfying modern system needs.\n'
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        block_type: 'paragraph_block',
                        content: 'This is hello from home page to paragraph_block!',
                    },
                    {
                        block_type: 'paragraph_block',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
                    },
                    {
                        block_type: 'heading_block',
                        heading_type: 'h1',
                        content: 'This is hello from home page to heading_block!',
                    },
                    {
                        block_type: 'image_block',
                        src: '/media/ew-logo.svg',
                        alt: 'Image alt text',
                    },
                    {
                        block_type: 'card_block',
                        content: 'This is hello from home page to card_block!',
                    },
                ],
            },
        ],
    };

    return (
        <>
            <PageBuilderComponent pageBuilderData={pageBuilderData}/>
        </>
    );
}

export default HomePage;
