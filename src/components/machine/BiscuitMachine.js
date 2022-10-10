import { Fragment, useState } from "react";

import Motor from "./devices/Motor";
import Switch from "./devices/Switch";
import Extruder from "./devices/Extruder";
import Stamper from "./devices/Stamper";
import Oven from "./devices/Oven";
import BiscuitBasket from "./devices/BiscuitBasket";

import '../../resources/scss/BiscuitMachine.scss'

const BuiscuitMachine = () => {
    const heatingUpDegrees = 20;
    const keepOvenWarmDegrees = 5;
    const minBakingTemp = 220;
    const maxBakingTemp = 240;
    const [currentBiscuitPosition, setCurrentBiscuitPosition] = useState('waiting');
    const [previousBiscuitPosition, setPreviousBiscuitPosition] = useState(currentBiscuitPosition);
    const [degrees, setDegrees] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
    let ovenDegrees = degrees;
    let warmingInterval;
    let lowerTempInterval;
    let increaseTempInterval;

    if (isRunning) {
        warmingInterval = setInterval(() => {
            ovenDegrees = ovenDegrees + heatingUpDegrees
            if (ovenDegrees >= maxBakingTemp) {
                let maxOvenDegrees = ovenDegrees
                clearInterval(warmingInterval)
                lowerTempInterval = setInterval(() => {
                    ovenDegrees = maxOvenDegrees - keepOvenWarmDegrees
                })
                if (maxOvenDegrees <= minBakingTemp) {
                    let minOvenDegrees = maxOvenDegrees
                    clearInterval(lowerTempInterval)
                    increaseTempInterval = setInterval(() => {
                        ovenDegrees = minOvenDegrees + keepOvenWarmDegrees
                    })
                }
            }
            setDegrees(ovenDegrees)
        }, 1000)
    }

    if (isPaused) {
        console.log('paused')

    }
    if (isStopped) {
        console.log('stopped')
    }
    console.log(currentBiscuitPosition)


    const startOvenHandler = (event) => {
        console.log(event)
        setIsRunning(true);
    };
    const pauseOvenHandler = () => {
        setIsPaused(true);
    }
    const stopOvenHandler = () => {
        setIsStopped(true);
    }
    return (
        <Fragment>
            <h1 className="biscuit-machine-heading">Biscuit Machine</h1>
            <Switch start={startOvenHandler} pause={pauseOvenHandler} stop={stopOvenHandler} />
            <div className="devices-container">
                <Extruder
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                    degrees={degrees}
                    setDegrees={setDegrees}
                    currentBiscuitPosition={currentBiscuitPosition}
                    setCurrentBiscuitPosition={setCurrentBiscuitPosition}
                    previousBiscuitPosition={previousBiscuitPosition}
                    setPreviousBiscuitPosition={setPreviousBiscuitPosition}
                />
                <Stamper
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                    degrees={degrees}
                    setDegrees={setDegrees}
                    currentBiscuitPosition={currentBiscuitPosition}
                    setCurrentBiscuitPosition={setCurrentBiscuitPosition}
                    previousBiscuitPosition={previousBiscuitPosition}
                    setPreviousBiscuitPosition={setPreviousBiscuitPosition}
                />
                <Oven
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                    degrees={degrees}
                    setDegrees={setDegrees}
                    currentBiscuitPosition={currentBiscuitPosition}
                    setCurrentBiscuitPosition={setCurrentBiscuitPosition}
                    previousBiscuitPosition={previousBiscuitPosition}
                    setPreviousBiscuitPosition={setPreviousBiscuitPosition}
                />
                <BiscuitBasket
                    degrees={degrees}
                    setDegrees={setDegrees}
                    currentBiscuitPosition={currentBiscuitPosition}
                    setCurrentBiscuitPosition={setCurrentBiscuitPosition}
                    previousBiscuitPosition={previousBiscuitPosition}
                    setPreviousBiscuitPosition={setPreviousBiscuitPosition}
                />
            </div>
        </Fragment>
    );
};

export default BuiscuitMachine;