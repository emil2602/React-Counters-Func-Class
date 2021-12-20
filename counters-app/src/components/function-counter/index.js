import { useState } from 'react';
import './index.scss';
import Button from './button';

export default function FunctionCounter() {
    let [counter, setCounter] = useState(0);
    const [color, setColor] = useState(null);

    const decrease = () => setCounter(prevState => prevState - 1);

    const increase = () => setCounter(prevState => prevState + 1);

    const changeBackground = (colorBg) => {
        setColor(colorBg)
    };

    return (
        <div className='function-counter' style={{background: color ? color : 'transparent'}}>
            <Button text='-' onClickHandler={decrease} changeBg={changeBackground}/>
            <input type='number' value={counter} onChange={(e) => setCounter(+e.target.value)}/>
            <Button text='+' onClickHandler={increase} changeBg={changeBackground}/>
        </div>
    )
};