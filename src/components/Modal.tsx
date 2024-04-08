'use client';

import { useState } from 'react';

const Modal = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const openCloseHandle = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className={`w-1/2 h-auto bg-white border-2 border-solid border-black flex flex-col justify-center items-center rounded-md`}
        >
            <div className='h-[3rem] w-full flex justify-center items-center'>
                <button onClick={() => openCloseHandle()}>
                    Press Me to Expand
                </button>
            </div>

            <div
                className={`fixed w-screen h-screen modal-background justify-center items-center ${
                    expanded ? 'flex' : 'hidden'
                }`}
                onClick={() => openCloseHandle()}
            >
                <div className='bg-white h-[20rem] w-[20rem] rounded-md border-2 border-solid border-black flex flex-col justify-center items-center'>
                    <div className='h-[2rem] w-full max-w-[100%] border-b-2 border-solid border-black flex justify-center items-center relative'>
                        <h3>Modal</h3>
                        <div
                            className='absolute top-[2px] right-2 hover:cursor-pointer'
                            onClick={() => openCloseHandle()}
                        >
                            X
                        </div>
                    </div>
                    <div className='flex-1 w-full'></div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
