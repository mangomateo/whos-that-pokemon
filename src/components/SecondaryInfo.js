
const SecondaryInfo = (props) => {
    return (
        <div id="info-2">
            <p>Abilities: {props.ability}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
        </div>
    );
}

export default SecondaryInfo;