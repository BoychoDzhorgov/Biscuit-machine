import '../../../resources/scss/Switch.scss';

const Switch = (props) => {
    return (
        <div className="machine-switch-buttons">
            <button onClick={props.start}>Start</button>
            <button onClick={props.pause}>Pause</button>
            <button onClick={props.stop}>Stop</button>
        </div>
    )
};

export default Switch;