
import BasicInfo from './BasicInfo';
import ExtraInfo from './ExtraInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// TODO: show 'no results found' message on failed queries
// TODO: show no results on page load

const Main = (props) => {
    return (
        <Row>
            <Col>
                <BasicInfo 
                    name={props.name} 
                    pokedexNum={props.pokedexNum}
                    image={props.image}
                />
            </Col>
            <Col>
                <ExtraInfo 
                    baseExp={props.baseExp}
                    type={props.type}
                    ability={props.ability}
                    height={props.height}
                    weight={props.weight}
                />
            </Col>
        </Row>
    );
}

export default Main;