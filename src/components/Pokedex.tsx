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
            console.log(data);
            return data;
        } catch (error: any) {
            throw new Error(error);
        }
    };

    getPokemonList();

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await getPokemonData();
            setCurrentPokemon(pokemonData);
        };
        fetchData();
    }, [pokemonIndex]);

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
                <Image
                    alt='pokemon sprite'
                    className='object-cotain'
                    width={100}
                    height={100}
                    src={currentPokemon.sprites.front_default}
                />
                {currentPokemon.name}
            </div>
        </section>
    );
};

export default Pokedex;
