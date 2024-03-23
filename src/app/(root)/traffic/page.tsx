import Traffic from '@/components/Traffic';

export default function Page() {
    return (
        <div className='w-100 bg-black min-h-[100vh] flex justify-center items-center'>
            <Traffic
                lights={[
                    {
                        color: 'green',
                        wait: 4000,
                    },
                    {
                        color: 'yellow',
                        wait: 500,
                    },
                    {
                        color: 'red',
                        wait: 3000,
                    },
                ]}
            />
        </div>
    );
}
