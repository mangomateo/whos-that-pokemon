
const PokedexData = (props) => {
    return (
        <div id="pokemon-data">
            <h2 id="dex-num">{props.pokedexNum}</h2>
            <h2 id="dex-name">{props.name}</h2>
        </div>
    );
}

export default PokedexData;