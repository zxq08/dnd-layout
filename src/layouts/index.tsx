import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Layout } from 'antd'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragComponents from '@/pages/components/box'
import Dustbin from '@/pages/drop/dustbin';
import Provider, { CounterContext } from '@/model';
import './index.less'

const { Header, Content, Sider, Footer } = Layout

export default function Index () {
    return (
        <Provider>
            <DndProvider backend={HTML5Backend}>
                <Layout className='layout-wrap'>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>
                            <DragComponents />
                        </Sider>
                        <Content>
                            <Dustbin />
                        </Content>
                    </Layout>
                    <Footer>
                    <div style={{ width:"100%", textAlign:"center" }}>
                        <p>Copyright © 2021 zxq08</p>
                        <a style={{ color: "#333" }} href='https://beian.miit.gov.cn/' target="_blank">京ICP备2021018713号-1</a>
                    </div>
                    </Footer>
                </Layout>
            </DndProvider>
        </Provider>
    );
}
