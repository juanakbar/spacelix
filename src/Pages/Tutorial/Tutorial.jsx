import React from 'react';
import App from '../../App.jsx';
import { NewspaperIcon } from '@heroicons/react/20/solid/index.js';

const project = [
    { name: 'System Administration',
        href: '/tutorial/linux',
        excerpt: 'A system administrator, often referred to as a sysadmin, is responsible for the maintenance, configuration, and reliable operation of computer systems, particularly multi-user computers, such as servers. This can include responsibilities such as installing, upgrading, and monitoring software and hardware, ensuring the integrity and security of data, and providing technical support to end-users.',
        tag: 'Linux',
        author: 'Juan Akbar Indrian',
        img: 'https://juanakbar.vercel.app/static/media/profile.4e4a1bf0eb2d9b9ffaa3.jpg'
    },
    { name: 'Web Development',
        href: '/tutorial/webdev',
        excerpt: 'Web development refers to the process of creating and maintaining websites. It encompasses a wide range of tasks and technologies, including the design and layout of the website, the creation of the website\'s content, and the management of the website\'s functionality and performance. There are many different programming languages and tools used in web development, including HTML, CSS, JavaScript, and various web frameworks and content management systems. Web developers may work on the front-end (client side) or the back-end (server side) of a website.',
        tag: 'Web Dev',
        author: 'Juan Akbar Indrian',
        img: 'https://juanakbar.vercel.app/static/media/profile.4e4a1bf0eb2d9b9ffaa3.jpg'
    },
]
export default function Tutorial(props) {

    return (
        <App>
            <section className='min-h-screen'>
                <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                    <div className='mx-auto max-w-screen-sm text-center lg:mb-16 mb-8'>
                        <h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Our
                            Tutroial</h2>
                        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>Let's learn without limit</p>
                    </div>
                    <div className='grid gap-8 lg:grid-cols-2 container'>
                        {project.map((item, index) => (

                        <article
                            className='p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                            <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span
                      className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
                      <NewspaperIcon className={'mr-1 w-3 h-3'} />
                      {item.tag}
                  </span>
                                <span className='text-sm'>14 days ago</span>
                            </div>
                            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'><a
                                href='#'>{item.name}</a></h2>
                            <p className='mb-5 font-light text-gray-500 dark:text-gray-400'>{item.excerpt}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center space-x-4'>
                                    <img className='w-7 h-7 rounded-full'
                                         src={item.img}
                                         alt={item.author} />
                                    <span className='font-medium dark:text-white'>
                          Jese Leos
                      </span>
                                </div>
                                <a href={item.href}
                                   className='inline-flex items-center font-medium text-pink-600 dark:text-pink-500 hover:underline'>
                                    Read more
                                    <svg className='ml-2 w-4 h-4' fill='currentColor' viewBox='0 0 20 20'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <path fillRule='event'
                                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                              clipRule='event'></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        ))}
                    </div>
                </div>
            </section>
        </App>
    );
}

