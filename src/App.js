
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  // useState() hooks to initialize and set the state of various points of data
  const [name, setName] = useState([]);
  const [pokedexNum, setPokedexNum] = useState([]);
  const [baseExp, setBaseExp] = useState([]);
  const [type, setType] = useState([]);
  const [ability, setAbility] = useState([]);
  const [height, setHeight] = useState([]);
  const [weight, setWeight] = useState([]);
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState('muk');

  // useEffect() to fetch data and update state
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}/`)
      .then(res => {
        setName(res.data.name);
        setPokedexNum(res.data.id);
        setBaseExp(res.data.base_experience);
        setType(res.data.types[0].type.name);
        setAbility(res.data.abilities[0].ability.name);
        setHeight(res.data.height);
        setWeight(res.data.weight);
        setImage(res.data.sprites.front_default);
      })
      .catch(err => console.error(err));
  }, [query])

  return (
    <div>
      <Header setQuery={setQuery}/>
      <Main 
        name={name}
        pokedexNum={pokedexNum}
        baseExp={baseExp}
        type={type}
        ability={ability}
        height={height}
        weight={weight}
        image={image}
      />
      <Footer />
    </div>
  );
}

export default App;
