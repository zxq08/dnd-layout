import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useDrag } from 'react-dnd'
import Provider, { CounterContext } from '@/model';
import { ActionType } from '@/types';
import style from './index.less'

function Box () {
    const {store, dispatch} = useContext(CounterContext)

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
            dispatch({type: ActionType.increment})
        }
    }) as any)


    return (<div ref={dragRef} className={style.boxWrap}>Box</div>);
}

export default Box;