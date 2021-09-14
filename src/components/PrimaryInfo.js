
const PrimaryInfo = (props) => {
    return (
        <div id="info-1">
            <p>Base Exp: {props.baseExp}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            
        </div>
    );
}

export default PrimaryInfo;