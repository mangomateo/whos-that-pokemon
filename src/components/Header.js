import React from "react";

const Header = () => {
    return (
        <header class="center-me">
            <h1>Who's that Pokemon?</h1>
            <section>
                <input type="text" placeholder="Enter Pokemon name or ID..." />
                <input type="button" value="Search" />
            </section>
        </header>
    );
}

export default Header;