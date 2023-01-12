import React from 'react';
import App from '../../../App.jsx';

const linux = [
    {
        name: 'Setting Network',
        href: '/tutorial/linux/networking-ajau',
        excerpt: 'Disini kita akan belajar gimana install package untuk setting jaringan dan konfigurasi jaringan pada linux debian 9.',
        img: '/public/Article/1.png',
    },
];
export default function Linux(props) {

    return (
        <App>
            <section className='min-h-screen'>
                <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                    <div className='max-w-screen-sm lg:mb-16 mb-8'>
                        <h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                            Linux</h2>
                        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>Sistem Administrasi</p>
                    </div>
                    <div className='grid gap-8 lg:grid-cols-3 container'>
                        {linux.map((item, index) => (


                            <div
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href={item.href}>
                                    <img className="rounded-t-lg" src={item.img} alt={item.name} />
                                </a>
                                <div className="p-5">
                                    <a href={item.href}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.excerpt}</p>
                                    <a href={item.href}
                                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="event"
                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                  clipRule="event"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>


                        ))}
                    </div>
                </div>
            </section>
        </App>
    );
}

