import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './index.less'

function Box(props: any) {
    return ( <div className={style.boxWrap}>
        {props.children}
    </div> );
}

export default Box;