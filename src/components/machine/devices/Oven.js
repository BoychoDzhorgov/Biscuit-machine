import { useEffect } from 'react'

import Biscuit from "../Biscuit";

const Oven = (props) => {
    useEffect(() => {
        if(props.isRunning) {
            if (props.degrees === 220) {
                props.setPreviousBiscuitPosition(props.currentBiscuitPosition)
                props.setCurrentBiscuitPosition('Oven')
            }
        }
    }, [props.degrees, props.currentBiscuitPosition, props.previousBiscuitPosition])
    return (
        <div className="device-container">
            <h2 className="device-name">Oven</h2>
            <div className="oven">
                <img width="200px" src='../../oven-icon.png' />
                <div className="oven-temperature">Temperature: {props.degrees}</div>
            </div>
            {props.currentBiscuitPosition === 'Oven' ? <div><Biscuit /></div> : ''}
        </div>
    )
};

export default Oven;
