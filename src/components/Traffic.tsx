interface Light {
    color: string;
    wait: number;
}

interface Props {
    lights: Array<Light>;
}

const Traffic = ({ lights }: Props) => {
    return (
        <section className='w-[90%] flex flex-col items-center justify-between py-4 px-8 bg-white rounded-md'>
            <div className='w-1/3 h-[35rem] bg-slate-400 rounded-lg flex flex-col justify-evenly items-center'>
                {lights.map((light, index) => (
                    <div
                        key={light.color}
                        className='border-2 bg-black rounded-full w-40 h-40'
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Traffic;
