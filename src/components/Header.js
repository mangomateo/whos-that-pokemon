import React, {useState} from "react";
import Row from 'react-bootstrap/Row';

// TODO: implement submit event on "enter" keypress

const Header = props => {

    const [inputValue, setInputValue] = useState('');

    // get text value solution --> https://bit.ly/3nFWPjJ
    // Set inputValue state to the current value of input field on every change
    const handleChange = event => setInputValue(event.target.value);

    // Set global query state to current value of input field when button is clicked
    const handleSubmit = () => props.setQuery(inputValue);

    return (
        <Row className="text-center my-5">
            <header>
                <h1 className="title-font">Who's that Pokemon?</h1>
                <section className="my-5">
                <input type="text" placeholder="Enter Pokemon name or ID..." id="searchbar" onChange={handleChange}/>
                    <button type="submit" id="button" onClick={handleSubmit}>Search</button>
                </section>
            </header>
        </Row>
    );
}

export default Header;