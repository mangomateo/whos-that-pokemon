
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <Row>
            <footer className="text-center my-5"> 
                <h6>
                    {/* coffee emoji code from https://unicode-table.com/en/2615/ */}
                    <a href="http://matt-codes.com">Matt codes</a> on &#9749;
                </h6>
            </footer>
        </Row>
    );
}

export default Footer;