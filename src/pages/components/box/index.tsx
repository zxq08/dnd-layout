import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ActionType } from '@/types';
import Box from './component'
import DragComponents from '@/pages/drag';
import style from './index.less'

function DragBox () {
    return (<DragComponents type='Box' id='id1' className={style.dragComponentWrap} ActionType={ActionType.increment}>
        <Box>Box</Box>
    </DragComponents>);
}

export default DragBox;