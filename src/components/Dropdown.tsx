'use client';

import { useState } from 'react';

const Dropdown = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const openCloseHandle = () => {
        console.log('hit');
        setExpanded(!expanded);
    };

    return (
        <div
            className={`w-1/2 h-auto bg-white border-2 border-solid border-black flex flex-col justify-center items-center relative ${
                expanded ? 'rounded-t-md' : 'rounded-md'
            }`}
        >
            <div className='h-[3rem] w-full flex justify-center items-center'>
                <button onClick={() => openCloseHandle()}>
                    Press Me to Expand
                </button>
            </div>
            <div
                className={`h-[20rem] w-full bg-slate-500 absolute top-[3rem] rounded-b-md ${
                    expanded ? 'block' : 'hidden'
                }`}
            ></div>
        </div>
    );
};

export default Dropdown;
