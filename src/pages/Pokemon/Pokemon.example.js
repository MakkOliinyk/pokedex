import React, { useState, useEffect } from 'react';

import cx from './Pokemon.css';

const Pokemon = ({ match }) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={cx('test')}>
            {pokemon.name}
            <img alt="" src={pokemon.sprites && pokemon.sprites.front_default} />
        </div>
    );
};

export default Pokemon;
