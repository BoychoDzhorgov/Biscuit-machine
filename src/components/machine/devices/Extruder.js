import { useEffect } from "react";

import Biscuit from "../Biscuit";

const Extruder = (props) => {
    const currentDegrees = props.degrees
    useEffect(() => {
        if (props.isRunning) {
            if (props.degrees == 180) {
                props.setCurrentBiscuitPosition('Extruder')
            }
        }
    }, [props.degrees, props.currentBiscuitPosition])

    return (
        <div className="device-container">
            <h2 className="device-name">Extruder</h2>
            <div className="extruder">
                <img height="200px" src='../../extruder-icon.png' />
            </div>
            {props.currentBiscuitPosition === 'Extruder' ? <div><Biscuit /></div> : ''}
        </div>
    )
};

export default Extruder;
