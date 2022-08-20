import * as React from 'react';
import { useState, useEffect } from 'react';
import { Layout } from 'antd'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Box from '@/pages/components/box'
import Dustbin from '@/pages/drop/dustbin';
import './index.less'

const { Header, Content, Sider, Footer } = Layout

export default function Index () {
    return (
        <DndProvider backend={HTML5Backend}>
            <Layout className='layout-wrap'>
                <Header>Header</Header>
                <Layout>
                    <Sider>
                        <Box />
                    </Sider>
                    <Content>
                        <Dustbin />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </DndProvider>
    );
}
