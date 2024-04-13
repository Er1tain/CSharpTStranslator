import {useRef, useState} from "react";

export default function SpeedControl() {

    const value_range: any = useRef();
    const [speed, setSpeed] = useState(1);
    
    const changeSpeed = ()=> setSpeed(value_range.current.value);
        
    
    
    return <div>
            <p>Скорость: {speed}x</p>
            <input ref={value_range} type="range" className={"w-80 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer "} 
                   defaultValue={1} min={1} max={10} onChange={changeSpeed}></input>
        </div>
}