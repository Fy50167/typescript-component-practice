'use client';

import { useState } from 'react';

interface Item {
    button: string;
    content: string;
}

interface Props {
    items: Array<Item>;
}

const Tabs = ({ items }: Props) => {
    const [currentTab, setCurrentTab] = useState<string>(items[0].button);

    const setTab = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setCurrentTab(e.currentTarget.textContent || '');
    };

    return (
        <section className='w-[90%] flex flex-col items-center justify-between py-4 px-8 bg-white rounded-md'>
            <div className='w-full flex justify-evenly items-center'>
                {items.map((tab) => (
                    <div
                        key={tab.button}
                        className={`border-b-[1px] border-black w-1/3 mx-[3rem] flex justify-center hover:border-blue-500 duration-200 ${
                            tab.button === currentTab ? 'border-blue-500' : ''
                        }`}
                    >
                        <button onClick={setTab}>{tab.button}</button>
                    </div>
                ))}
            </div>

            <div className='w-full flex justify-center px-[1.5rem]'>
                {items.map((tab, index) => (
                    <p key={index} hidden={tab.button !== currentTab}>
                        {tab.content}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Tabs;
