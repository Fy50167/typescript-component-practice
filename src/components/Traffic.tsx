interface Light {
    color: string;
    wait: number;
}

interface Props {
    lights: Array<Light>;
}

const Traffic = ({ lights }: Props) => {
    return <div></div>;
};

export default Traffic;
