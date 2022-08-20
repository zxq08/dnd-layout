import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './index.less'
import { useDrag } from 'react-dnd'

function Box () {
    const [collected, dragRef, dragPreview] = useDrag(() => ({
        type: 'Box',
        options: 'copy',
        item: () => {
            console.log('start drag!')
            return { type: "Box", id: "box1" }
        },
        end: (item: any, monitor: any) => {
            if (monitor.didDrop()) {
                console.log('droped-item', item)
            }
            console.log('droped!')
        }
    }) as any)

    return (<div ref={dragRef} className={style.boxWrap}>Box</div>);
}

export default Box;