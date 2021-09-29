
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

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
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState('init'); 

  // useEffect() to fetch data and update state
  useEffect(() => {
    if (query) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(res => {
        setName(res.data.name);
        setPokedexNum(res.data.id);
        setBaseExp(res.data.base_experience);
        setType(res.data.types[0].type.name);
        setAbility(res.data.abilities[0].ability.name);
        setHeight(res.data.height);
        setWeight(res.data.weight);
        setImage(res.data.sprites.front_default);
        setShowResults('success');
      })
      .catch(err => {
        console.error(err);
        setShowResults('fail');
      });
    }
  }, [query]);

  let mainData;

  // Show search results only when the API returns a result, otherwise show error message
  if (showResults === 'init') {
    mainData =  <h2 className="text-center">Search for a Pokemon above!</h2>;
  }

  if (showResults === 'success') {
    mainData = <Main name={name} pokedexNum={pokedexNum} baseExp={baseExp} type={type} ability={ability} height={height} weight={weight} image={image} />;
  } 
  
  if (showResults === 'fail') {
    mainData = <h2 className="text-center">Try again =(</h2>; 
  }
    
   

  return (
    <div>
      <Container>
        <Header setQuery={setQuery}/>
        {mainData}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
