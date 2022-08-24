import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import Box from '../components/box/component';
import Provider, { CounterContext } from '@/model';
import { Drawer, Form, Input, Slider, Row, Col } from 'antd'
import style from './index.less'

interface attribute {
    id: Number | String,
    width: Number | String,
    height: Number | String,
}

function Dustbin () {

    const [visible, setVisible] = useState(false)
    const [current, setCurrent] = useState(null) // 当前选中的id
    const [attribute, setAttribute] = useState<attribute>() // 当前选中的属性
    const {store, dispatch} = useContext(CounterContext)
    const [list, setList] = useState<Array<any>>()
    const [collected, dropRef] = useDrop({
        accept: "Box",
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver()
        })
    })

    useEffect(() => {
        console.log('beforeSetList', store)
        setList(store?.counter?.toArray())
    }, [store.counter])

    useEffect(() => {
        const item = list?.find(f => f.id === current)
        if (item) {
            setAttribute(item.attribute)
                // {
                // id: current,
            //     ...item.attribute
            // }
        }
    }, [current])

    useEffect(() => {
        if (attribute)  setVisible(true)
    }, [attribute])

    const openDrawer = (id: any) => {
        console.log('current',id)
        setCurrent(id)
    }
    const closeDrawer = () => {
        setVisible(false)
        setCurrent(null)
    }

    return (<div ref={dropRef} className={style.dustbinWrap}>
        {list?.map((item) => {
            console.log('current', current, attribute)
            const style = current === item.id ? attribute : item.attribute
            return <div key={item.id} id={item.id} onClick={() => { openDrawer(item.id) }} style={style}>
                <Box key={item?.id}/>
            </div>
        })}
        <Drawer
            title="Basic Drawer"
            placement='right'
            onClose={closeDrawer}
            visible={visible}
            key='rightAttribute'
        >
            <Row align="middle" gutter={[0, 8]}>
                <Col span={4}>
                    <span>名称</span>
                </Col>
                <Col span={20}>
                    <Input placeholder='区分同类型组件' />
                </Col>
            </Row>
            <Row align="middle" gutter={[0, 8]}>
                <Col span={4}>
                    <span>高度</span>
                </Col>
                <Col span={20}>
                    <Slider onAfterChange={( height: Number ) => {
                        setAttribute({ 
                            ...attribute,
                            height
                        } as attribute)
                    }} defaultValue={Number(attribute?.width) || 0} />
                </Col>
            </Row>
            <Row align="middle" gutter={[0, 8]}>
                <Col span={4}>
                    <span>宽度</span>
                </Col>
                <Col span={20}>
                    <Slider onAfterChange={( width: Number ) => {
                        setAttribute({ 
                            ...attribute, 
                            width
                        } as attribute)
                    }} defaultValue={Number(attribute?.height) || 0} />
                </Col>
            </Row>
        </Drawer>
    </div>);
}

export default Dustbin;