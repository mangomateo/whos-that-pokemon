import BasicInfo from './BasicInfo';
import ExtraInfo from './ExtraInfo';

const Main = (props) => {
    return (
        <main>
            <BasicInfo 
                name={props.name} 
                pokedexNum={props.pokedexNum}
                image={props.image}
            />
            <ExtraInfo 
                baseExp={props.baseExp}
                type={props.type}
                ability={props.ability}
                height={props.height}
                weight={props.weight}
            />
        </main>
    );
}

export default Main;