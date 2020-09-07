import React, { useState, useRef, useEffect } from 'react';
import TextTemplate from './TextTemplate'

const Template1 = (props) => {
    const [isOnClick, setIsOnClick] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [posX, setPosX] = useState();
    const [posY, setPosY] = useState();
    const [isCreated, setCreated] = useState(false);
    const [text, setText] = useState('');
    const textRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        console.log('propsWidth', props.widthApp.current.clientHeight)
    }, [props.clientWidth])

    const onMouseDown = (e) => {
        e = window.event || e;
        e.preventDefault();
        setOffsetX(e.offsetX);
        setOffsetY(e.offsetY);
        setIsOnClick(true);
    }

    const onMouseUp = (e) => {
        e = window.event || e;
        e.preventDefault();

        setIsOnClick(false);
    }

    const onMouseOut = (e) => {
        e = window.event || e;
        e.preventDefault();
        setIsOnClick(false);
    }

    const onClickDivText = (e) => {
        e = window.event || e;
    }

    const onMouseMove = (e) => {
        e = window.event || e;
        e.preventDefault();

        if (!isOnClick) return;
        console.log('e.clientY', e.clientY);
        console.log('e.clientX', e.clientX);
        console.log('offsetY', offsetY);
        console.log('offsetX', offsetX);
        console.log('WidthApp', (props.widthApp.current.clientWidth / 2) - 300);
        console.log('clientHeight', ((props.widthApp.current.clientHeight / 2) - 300));

        textRef.current.style.top = `${e.clientY - offsetY - ((props.widthApp.current.clientHeight / 2) - 300) - 280}px`;
        textRef.current.style.left = `${e.clientX - offsetX - ((props.widthApp.current.clientWidth / 2) - 300) - 250}px`;
    }

    const onClickCreate = (e) => {
        e.preventDefault();
        setCreated(true);
    }

    const onChangeText = (e) => {
        e = window.event || e;
        setText(e.target.value);
    }

    return <>
        <div id={`tile-0`} key={`1`} className="tile" style={{ width: '600px', height: '600px', margin: 'auto' }}>
            <div className="tile-base" />
            <div className="preview frameless" style={{ width: '600px', height: '600px' }}>
                <img alt="" className="preview-image" src='/images/pexels-christian-heitz-842711.jpg'
                    style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="TileFrame" style={{ width: '600px', height: '600px' }}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}>
                {
                    isCreated ?
                        <TextTemplate onMouseDown={onMouseDown} ref={textRef} onClick={onClickDivText} text={text} /> : null
                }
                <div style={{ width: '150px', height: '150px', position: 'relative', top: '200px', left: '-220px' }}>
                    <img src="/images/hoa-la-canh-removebg-preview.png" style={{ width: '100%', height: '100%' }} />
                    <div style={{ color: 'white', position: 'relative', top: '-70px', left: '0px' }}>Cây tre</div>
                </div>
            </div>
        </div>
        {
            isCreated ?
                <div>
                    <input type='text' value={text} onChange={onChangeText} />
                </div> : null
        }
        <div>
            <button onClick={e => onClickCreate(e)}>add text</button>
        </div>
    </>
}

export default Template1;