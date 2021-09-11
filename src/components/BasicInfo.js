import PokedexData from "./PokedexData";
import PokemonImg from "./PokemonImg";

const BasicInfo = () => {
    return (
        <section id="basic-info" className="center-me">
            <PokedexData />
            <PokemonImg />
        </section>
    );
}

export default BasicInfo;