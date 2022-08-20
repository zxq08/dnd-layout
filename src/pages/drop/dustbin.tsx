import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import style from './index.less'
function Dustbin () {
    const [collected, dropRef] = useDrop({
        accept: "Box",
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver()
        })
    })
    return (<div ref={dropRef} className={style.dustbinWrap}>
        { }
    </div>);
}

export default Dustbin;