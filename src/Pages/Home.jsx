import React from 'react';
import App from '../App.jsx';
import Team from './Team/Team.jsx';

export default function Home(props) {
    return (
        <App>
            <div className='container px-6 py-16 mx-auto text-center'>
                <div className='max-w-xl mx-auto'>
                    <h1 className='text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl'>Get ahead in
                        technology with Spacelix</h1>
                    <p className='mt-6 text-gray-500 dark:text-gray-300'>Proven tutorials and resources to help you
                        level up your technology skills and advance your career</p>
                    <div className='px-8 py-3'>
                        <div className='grid gap-8 items-start justify-center'>
                            <div className='relative group'>
                                <div
                                    className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                                <a href={'/tutorial'}
                                    className='relative px-7 py-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'>
                                        <span className='flex items-center space-x-5'>
                                          <svg xmlns='http://www.w3.org/2000/svg'
                                               className='h-6 w-6 text-pink-600 -rotate-6' fill='none'
                                               viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                                  d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
                                          </svg>
                                          <span className='pr-6 text-gray-100'>Tutorial</span>
                                        </span>
                                    <span
                                        className='pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200'>
                                            <span className={'sm:inline-block hidden'}>See what's new</span> &rarr;
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-10'>
                    <img className='object-cover w-full h-96 rounded-xl lg:w-4/5'
                         src='/img/Home.jpeg' />
                </div>
            </div>
            <Team />
        </App>
    );
}
