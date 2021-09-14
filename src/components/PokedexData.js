import Row from 'react-bootstrap/Row';

const PokedexData = (props) => {

    return (
        <Row id="pokemon-data">
            <h2 id="dex-num" className="text-center">
                {props.pokedexNum} &nbsp; {props.name}
            </h2>
        </Row>
    );
}

export default PokedexData;