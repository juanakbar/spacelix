import React from 'react';

export default function Team(props) {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                <div>
                    <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 dark:text-teal-100 '>
                        Dream Team
                    </p>
                </div>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                        <span className='relative inline-block dark:text-white'>
                            <svg
                                viewBox='0 0 52 24'
                                fill='currentColor'
                                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-purple-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block dark:text-pink-400'
                            >
                              <defs>
                                <pattern
                                    id='247432cb-6e6c-4bec-9766-564ed7c230dc'
                                    x='0'
                                    y='0'
                                    width='.135'
                                    height='.30'
                                >
                                  <circle cx='1' cy='1' r='.7' />
                                </pattern>
                              </defs>
                              <rect
                                  fill='url(#247432cb-6e6c-4bec-9766-564ed7c230dc)'
                                  width='52'
                                  height='24'
                              />
                            </svg>
                            <span className='relative dark:text-white'>Welcome</span>
                          </span>{' '}
                    <span className={'dark:text-white'}>our talented team of professionals</span>
                </h2>
                <p className='text-base text-gray-700 md:text-lg dark:text-white'>
                    We are a team of professionals who are passionate about technology and helping others learn
                </p>
            </div>
            <div
                className='flex gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
                <div className='flex'>
                    <img
                        className='object-cover w-20 h-20 mr-4 rounded-full shadow'
                        src='https://juanakbar.vercel.app/static/media/profile.4e4a1bf0eb2d9b9ffaa3.jpg'
                        alt='Person'
                    />
                    <div className='flex flex-col justify-center'>
                        <a href={'https://juanakbar.vercel.app'} target={'_blank'}
                           className='text-lg font-bold hover:border-b hover:border-dotted dark:text-white '>Juan
                            Akbar Indrian</a>
                        <p className='text-sm text-gray-800 dark:text-white'>Owner's Spacelix</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
