import React, { useState, useEffect, useRef } from 'react';

const TextTemplate = React.forwardRef((props, ref) => {

    return <div
        onMouseDown={e => props.onMouseDown(e)}
        onMouseUp={props.onMouseUp}
        onClick={props.onClick}
        style={{ backgroundColor: 'transparent', width: '100px', position: 'relative', top: '100px', left: '100px' }}
        ref={ref}>
        {props.text}
    </div>
});

export default TextTemplate;