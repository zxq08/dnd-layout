import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useDrag } from 'react-dnd'
import Provider, { CounterContext } from '@/model';
import style from './index.less'

function DragComponents (props: any) {
    const {store, dispatch} = useContext(CounterContext)

    const [collected, dragRef, dragPreview] = useDrag(() => ({
        type: props?.type || 'Box',
        options: 'copy',
        item: () => {
            console.log('start drag!')
            return { type: props?.type || 'Box', id: props?.id || null }
        },
        end: (item: any, monitor: any) => {
            if (monitor.didDrop()) {
                console.log('droped-item', item)
            }
            console.log('droped!')
            //ActionType.increment
            dispatch({type: props.ActionType})
        }
    }) as any)


    return (<div className={style.dragComponentWrap} ref={dragRef}>
        {props.children}
    </div>);
}

export default DragComponents;