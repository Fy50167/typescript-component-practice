import React from 'react';

interface Image {
    src: string;
    alt: string;
}

interface Props {
    images: Array<Image>;
    transitionDuration: number;
    height: number;
    width: number;
}

const ImageCarousel = ({
    images,
    transitionDuration,
    height,
    width,
}: Props) => {
    return <div></div>;
};

export default ImageCarousel;
