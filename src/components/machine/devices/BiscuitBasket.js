import { useEffect, useState } from "react";

import Biscuit from "../Biscuit";

const BiscuitBasket = (props) => {
    const [biscuitCount, setBiscuitCount] = useState(0);
    let count = biscuitCount;
    useEffect(() => {
        if (props.isRunning) {
            if (props.degrees === 240) {
                props.setPreviousBiscuitPosition(props.currentBiscuitPosition);
                props.setCurrentBiscuitPosition('BiscuitBasket');
                count++;
            }
            setBiscuitCount(count)
        }
    }, [props.degrees, props.currentBiscuitPosition, props.previousBiscuitPosition, count]);

    return (
        <div className="device-container">
            <h2 className="device-name">Basket</h2>
            <div className="basket">
                <img width="200px" src='../../biscuit-basket-icon.png' />
                <div>Biscuits Count: {count}</div>
            </div>
            {props.currentBiscuitPosition === 'BiscuitBasket' ? <div><Biscuit /></div> : ''}
        </div>
    )
};

export default BiscuitBasket;