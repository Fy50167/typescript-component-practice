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
            setCurrentPokemon(data);
        } catch (error: any) {
            throw new Error(error);
        }
    };

    const newPokemonFromList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const pokemonName = e.target.value;
        const index = pokemonList.findIndex(
            (pokemon) => pokemon.name === pokemonName
        );
        setPokemonIndex(index + 1);
    };

    const changeId = (increment: number) => {
        if (pokemonIndex + increment > 0 && pokemonIndex + increment < 152)
            setPokemonIndex(pokemonIndex + increment);
    };

    useEffect(() => {
        getPokemonData();
    }, [pokemonIndex]);

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <section className='w-1/3 flex flex-col items-center justify-between py-4 px-8 bg-white rounded-md border-2 border-solid border-red-600'>
            <div className='flex flex-col justify-evenly items-start gap-4'>
                <div className='w-full text-center'>
                    <select
                        onChange={newPokemonFromList}
                        value={currentPokemon.name}
                    >
                        {pokemonList.map((pokemon, index) => (
                            <option value={pokemon.name} key={pokemon.name}>
                                {pokemon.name}
                            </option>
                        ))}
                    </select>
                </div>
                {currentPokemon ? (
                    <>
                        <p className='w-full text-center font-bold'>
                            #{currentPokemon.id}:{' '}
                            {currentPokemon.name.charAt(0).toUpperCase() +
                                currentPokemon.name.slice(1)}
                        </p>
                        <div className='rounded-full width-[90%] aspect-w-1 aspect-h-1 bg-blue-300 border-solid border-2 border-black'>
                            <Image
                                src={currentPokemon.sprites.front_default}
                                alt='pokemon image'
                                width={200}
                                height={200}
                                className='object-cover'
                            />
                        </div>
                        <div className='flex w-full justify-center gap-5 items-center'>
                            <button
                                onClick={() => changeId(-1)}
                                className='flex-1 bg-red-500 rounded-md border-2 border-solid border-black'
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => changeId(1)}
                                className='flex-1 bg-blue-500 rounded-md border-2 border-solid border-black'
                            >
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
};

export default Pokedex;
