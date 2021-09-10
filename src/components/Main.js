import React from "react";

const Main = () => {
    return (
        <main>
            <section id="basic-info" class="center-me">
                <div id="pokemon-data">
                    <h2>#001</h2>
                    <h2>Bulbasaur</h2>
                </div>
                <div id="pokemon-image">
                    <img src="https://via.placeholder.com/200" alt="Test" />
                </div>
            </section>
            <section id="extra-info" class="center-me">
                <div id="info-1">
                    <p>Base Exp: ###</p>
                    <p>Type: ***</p>
                </div>
                <div id="info-2">
                    <p>Abilities: ***</p>
                    <p>Height: ###</p>
                    <p>Weight: ###</p>
                </div>
            </section>
        </main>
    );
}

export default Main;