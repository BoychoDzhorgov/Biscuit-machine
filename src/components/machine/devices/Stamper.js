import { useEffect } from "react";

import Biscuit from "../Biscuit";

const Stamper = (props) => {
    useEffect(() => {
        if (props.isRunning) {
            if (props.degrees === 200) {
                props.setPreviousBiscuitPosition(props.currentBiscuitPosition);
                props.setCurrentBiscuitPosition('Stamper');
            }
        }
    }, [props.degrees, props.currentBiscuitPosition, props.previousBiscuitPosition]);

    return (
        <div className="device-container">
            <h2 className="device-name">Stamper</h2>
            <div className="stamper">
                <img height="200px" src='../../stamper-icon.png' />
            </div>
            {props.currentBiscuitPosition === 'Stamper' ? <div><Biscuit /></div> : ''}
        </div>
    )
};

export default Stamper;
