
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

// TODO: show no results on page load

const Main = (props) => {
    
    return (
        <Row>
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src={props.image} />
                <Card.Body className="text-center">
                    <Card.Title>
                        #{props.pokedexNum} &nbsp; <span className="text-capitalize">{props.name}</span>
                    </Card.Title>
                    <Card.Text>
                        Type: <span className="text-capitalize">{props.type}</span>
                    </Card.Text>
                    <Card.Text>
                        Ability: <span className="text-capitalize">{props.ability}</span>
                    </Card.Text>
                    <Card.Text>
                        Base Exp: {props.baseExp}
                    </Card.Text>
                    <Card.Text> 
                        Height: {props.height} &nbsp; || &nbsp;
                        Weight: {props.weight}
                    </Card.Text> 
                </Card.Body>
            </Card>
        </Row>
    );
}

export default Main;