'use client';

import { useState, useEffect } from 'react';

const BASE_URL: string = 'https://restcountries.com/v3.1';

// all is /all, filter is /capital/{capital}

const FILTERABLE_CAPITALS: string[] = [
    'None',
    'Tallinn',
    'Helsinki',
    'Stockholm',
    'Oslo',
    'Copenhagen',
    'Reykjavik',
];

interface Country {
    name: {
        common: string;
    };
    capital: Array<string>;
}

const CountrySearch = () => {
    const [countryData, setCountryData] = useState<Country[]>([]);
    const [filter, setFilter] = useState<string>('None');
    const [loading, setLoading] = useState<boolean>(false);

    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                setLoading(true);
                if (filter === 'None') {
                    const response = await fetch(`${BASE_URL}/all`);
                    const res = await response.json();
                    setCountryData(res);
                } else {
                    const response = await fetch(
                        `${BASE_URL}/capital/${filter}`
                    );
                    const res = await response.json();
                    setCountryData(res);
                }
            } catch (error: any) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCountryData();
    }, [filter]);
    return (
        <>
            <select className='w-1/3 mb-4' onChange={onSelect}>
                {FILTERABLE_CAPITALS.map((capital, index) => (
                    <option value={capital} key={capital}>
                        {capital}
                    </option>
                ))}
            </select>

            <div className='bg-white w-[90%] max-h-[45rem] rounded-md overflow-auto p-4'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    countryData.map((country, index) => {
                        return (
                            <div
                                key={country.name.common}
                                className={`w-full p-2 border-2 border-solid border-black flex flex-col items-start justify-evenly ${
                                    index !== countryData.length - 1
                                        ? 'mb-2'
                                        : ''
                                }`}
                            >
                                <h2 className='font-bold text-xl'>
                                    Name: {country.name.common}
                                </h2>
                                <p className='text-sm'>
                                    Capital: {country.capital}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default CountrySearch;
