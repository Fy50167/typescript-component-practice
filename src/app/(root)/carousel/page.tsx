import Carousel from '@/components/Carousel';

export default function Page() {
    return (
        <div>
            <ImageCarousel
                images={[
                    { src: 'https://example.com/images/foo.jpg', alt: 'A foo' },
                    { src: 'https://example.com/images/bar.jpg', alt: 'A bar' },
                    /* More images if desired. */
                ]}
                transitionDuration={300}
                height={500}
                width={800}
            />
        </div>
    );
}
