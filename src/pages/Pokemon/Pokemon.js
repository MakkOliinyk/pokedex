import React, { useState, useEffect } from 'react';

const Pokemon = ({ match }) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            {pokemon.name}
            <img alt="" src={pokemon.sprites && pokemon.sprites.front_default} />
        </div>
    );
};

export default Pokemon;
