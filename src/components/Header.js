import React, {useState} from "react";


const Header = props => {
    
    const [inputValue, setInputValue] = useState('');

    // Set inputValue state to the current value of input field on every change
    const handleChange = event => setInputValue(event.target.value);

    // Set global query state to current value of input field when button is clicked
    const handleSubmit = () => props.setQuery(inputValue);

    return (
        <header className="center-me">
            <h1 className="title-font">Who's that Pokemon?</h1>
            <section>
            <input type="text" placeholder="Enter Pokemon name or ID..." id="searchbar" onChange={handleChange}/>
                <button type="button" id="button" onClick={handleSubmit}>Search</button>
            </section>
        </header>
    );
}

export default Header;