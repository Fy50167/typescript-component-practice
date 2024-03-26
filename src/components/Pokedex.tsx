'use client';

import Image from 'next/image';

import { useState, useEffect } from 'react';

interface pokemonName {
    name: string;
    url: string;
}

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState<pokemonName[]>([]);
    const [pokemonIndex, setPokemonIndex] = useState<number>(1);
    const [currentPokemon, setCurrentPokemon] = useState<any>();

    const getPokemonList = async () => {
        try {
            const res = await fetch(
                'https://pokeapi.co/api/v2/pokemon/?limit=151'
            );
            const data = await res.json();
            setPokemonList(data.results);
        } catch (error: any) {
            throw new Error(error);
        }
    };

    const getPokemonData = async () => {
        try {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
            );
            const data = await res.json();
            setCurrentPokemon(data);
        } catch (error: any) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        getPokemonData();
    }, [pokemonIndex]);

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <section className='w-[90%] flex flex-col items-center justify-between py-4 px-8 bg-white rounded-md'>
            <select>
                {pokemonList.map((pokemon, index) => (
                    <option value={pokemon.name} key={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>

            <div className='flex flex-col justify-evenly items-start'>
                {currentPokemon ? (
                    <p>{currentPokemon.name}</p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
};

export default Pokedex;
