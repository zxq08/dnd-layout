import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ActionType } from '@/types';
import Box from './component'
import DragComponents from '@/pages/drag';
import style from './index.less'

function DragBox () {
    return (<DragComponents type='Box' id='id1' className={style.dragComponentWrap} ActionType={ActionType.increment}>
        <div style={{width: 50, height: 50}}>
            <Box />
        </div>
    </DragComponents>);
}

export default DragBox;