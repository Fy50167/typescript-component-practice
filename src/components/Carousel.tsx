'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

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
    const [slide, setSlide] = useState<number>(0);

    const changeImage = (increment: number) => {
        setSlide(
            slide + increment < 0
                ? images.length - 1
                : (slide + increment) % images.length
        );
    };

    const indicatorSet = (index: number) => {
        setSlide(index);
    };

    return (
        <div className='flex justify-center items-center w-[600px] h-auto relative overflow-hidden'>
            <BsArrowLeftCircleFill
                className='absolute h-[2rem] w-[2rem] left-2 text-white hover:cursor-pointer'
                onClick={() => changeImage(-1)}
            />
            {images.map((item, index) => {
                return (
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className={`rounded-md w-full h-full ${
                            slide === index ? '' : 'hidden'
                        }`}
                        key={item.alt}
                    />
                );
            })}
            <BsArrowRightCircleFill
                className='absolute h-[2rem] w-[2rem] right-2 text-white hover:cursor-pointer'
                onClick={() => changeImage(1)}
            />
            <span className='absolute flex bottom-2 gap-2'>
                {images.map((_, index) => {
                    return (
                        <button
                            onClick={() => indicatorSet(index)}
                            key={index}
                            className={`w-[10px] h-[10px] rounded-full bg-white ${
                                slide === index ? 'bg-slate-700' : ''
                            }`}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default ImageCarousel;
