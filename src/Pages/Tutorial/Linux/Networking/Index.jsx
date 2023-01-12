import React, { useEffect } from 'react';
import App from '../../../../App.jsx';
import { Link } from 'react-router-dom';
import Markdown from '../../../../Components/Markdown.jsx';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';

const linux =
    {
        name: 'Setting Network',
        tag: 'Linux',
        img: '/Article/1.png',
        author: {
            name: 'Juan Akbar Indrian',
            status: 'Author',
            img: 'https://juanakbar.vercel.app/static/media/profile.4e4a1bf0eb2d9b9ffaa3.jpg',
        },
        body: '/Article/1.md',
    };



export default function Networking(props) {
    const [md, setMd] = React.useState('');
    useEffect(() => {

        fetch(linux.body)
            .then((res) => res.text())
            .then((text) => {
                setMd(text);
            });
    }, [])

    return (
        <App>
            <main className='mt-10 container max-w-screen-lg'>
                <div className='mb-4 md:mb-0 w-full mx-auto relative'>
                    <div className='px-4 lg:px-0'>
                        <h2 className='text-4xl font-semibold text-gray-800 leading-tight'>
                            1. {linux.name}
                        </h2>
                        <a
                            href='#'
                            className='py-2 text-green-700 inline-flex items-center justify-center mb-2'
                        >
                            {linux.tag}
                        </a>
                    </div>

                    <img
                        alt={linux.name}
                        src={linux.img}
                        className='w-full object-cover lg:rounded h-[28em]' />
                </div>

                <div className='flex flex-col lg:flex-row lg:space-x-12'>
                    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 mt-6'>
                        <Markdown>
                            {md}
                        </Markdown>
                        <kbd>CTRL+I</kbd>

                    </div>


                    <div className='w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm'>
                        <div className='p-4 border-t border-b md:border md:rounded'>
                            <div className='flex py-2'>
                                <img src={linux.author.img}
                                     className='h-10 w-10 rounded-full mr-2 object-cover' />
                                <div>
                                    <p className='font-semibold text-gray-700 text-sm'> {linux.author.name} </p>
                                    <p className='font-semibold text-gray-600 text-xs'> {linux.author.status} </p>
                                </div>
                            </div>
                            <p className='text-gray-700 py-3'>
                                Juan writes about technology
                                Yourself required no at thoughts delicate landlord it be. Branched dashwood do is
                                whatever it.
                            </p>
                            <Link to={'https://instagram.com/juanakbarr1'}
                                  className='px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded'>
                                Follow on Instagram
                                <i className='bx bx-user-plus ml-2'></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
        </App>
    );
}
