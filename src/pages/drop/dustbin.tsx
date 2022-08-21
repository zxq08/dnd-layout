import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import Box from '../components/box/component';
import Provider, { CounterContext } from '@/model';
import style from './index.less'

function Dustbin () {
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

    return (<div ref={dropRef} className={style.dustbinWrap}>
        {list?.map((item) => <Box key={item?.id}/>)}
    </div>);
}

export default Dustbin;