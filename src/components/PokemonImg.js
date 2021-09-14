
const PokemonImg = (props) => {

    // ? Can the image be made larger here? Maybe 2x or 3x?

    return (
        // Using .text-center here as a hack to center image within the div
        // source: https://bit.ly/3nvrBM2
        <div id="pokemon-image" className="text-center">
            <img src={props.image} alt="Test" />
        </div>
);
}

export default PokemonImg;