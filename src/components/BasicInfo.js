import PokedexData from "./PokedexData";
import PokemonImg from "./PokemonImg";

// TODO: englarge sprites being returned by query

const BasicInfo = (props) => {
    return (
        <section id="basic-info">
            <PokedexData pokedexNum={props.pokedexNum} name={props.name} />
            <PokemonImg image={props.image} />
        </section>
    );
}

export default BasicInfo;