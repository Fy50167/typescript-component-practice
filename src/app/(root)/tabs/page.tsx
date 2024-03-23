import Tabs from '@/components/Tabs';

export default function Page() {
    return (
        <div className='w-100 bg-black min-h-[100vh] flex justify-center items-center'>
            <Tabs
                items={[
                    {
                        button: 'HTML',
                        content: `The HyperText Markup Language or HTML is the
                        standard markup language for documents designed to
                        be displayed in a web browser.`,
                    },
                    {
                        button: 'CSS',
                        content: `Cascading Style Sheets is a style sheet language
                        used for describing the presentation of a document
                        written in a markup language such as HTML or XML.`,
                    },
                    {
                        button: 'JavaScript',
                        content: `JavaScript, often abbreviated as JS, is a
                        programming language that is one of the core
                        technologies of the World Wide Web, alongside HTML
                        and CSS.`,
                    },
                ]}
            />
        </div>
    );
}
