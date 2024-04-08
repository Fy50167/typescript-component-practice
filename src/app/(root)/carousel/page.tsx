import ImageCarousel from '@/components/Carousel';

export default function Page() {
    return (
        <div className='w-full bg-black min-h-[100vh] flex justify-center items-center'>
            <ImageCarousel
                images={[
                    {
                        src: 'https://picsum.photos/seed/picsum1/600/400',
                        alt: 'image 1',
                    },
                    {
                        src: 'https://picsum.photos/seed/picsum2/600/400',
                        alt: 'image 2',
                    },
                    {
                        src: 'https://picsum.photos/seed/picsum3/600/400',
                        alt: 'image 3',
                    },
                ]}
                transitionDuration={300}
                height={500}
                width={800}
            />
        </div>
    );
}
