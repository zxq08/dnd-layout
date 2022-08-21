import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import Box from '../components/box';
import Provider, { CounterContext } from '@/model';
import style from './index.less'

function Dustbin () {
    const {store, dispatch} = useContext(CounterContext)
    const [list, setList] = useState([])
    const [collected, dropRef] = useDrop({
        accept: "Box",
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver()
        })
    })
    useEffect(() => {
        const _list = new Array(store.counter).fill(1)
        setList(_list as any)
    }, [store.counter])
    
    return (<div ref={dropRef} className={style.dustbinWrap}>
        {list?.map(item => <Box />)}
    </div>);
}

export default Dustbin;