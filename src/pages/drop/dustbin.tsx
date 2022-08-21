import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import Provider, { CounterContext } from '@/model';
import style from './index.less'

function Dustbin () {
    const {store, dispatch} = useContext(CounterContext)
    const [collected, dropRef] = useDrop({
        accept: "Box",
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver()
        })
    })
    return (<div ref={dropRef} className={style.dustbinWrap}>
        {store.counter}
    </div>);
}

export default Dustbin;