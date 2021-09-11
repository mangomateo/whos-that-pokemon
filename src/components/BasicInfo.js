import PokedexData from "./PokedexData";
import PokemonImg from "./PokemonImg";

const BasicInfo = (props) => {
    return (
        <section id="basic-info" className="center-me">
            <PokedexData pokedexNum={props.pokedexNum} name={props.name} />
            <PokemonImg image={props.image} />
        </section>
    );
}

export default BasicInfo;