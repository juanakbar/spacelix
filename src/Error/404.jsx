import { useRouteError } from 'react-router-dom';
import './Module.css'
import Guest from '../Guest.jsx';
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Guest>
            <main className='main'>
                <div className='description'>
                    <p>
                        <a href='/tutorial' className={'inline'}>
                            404 -
                            <code className={'code'}> Page not found</code>
                        </a>
                    </p>
                    <div>
                        <a
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            By{' '}
                            <img
                                src='/public/img/LogoDark.png'
                                alt='Spacelix Logo'
                                className={'vercelLogo'}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={'center'}>
                    <img
                        className={'logo'}
                        src='/public/img/LogoDark.png'
                        alt='Next.js Logo'
                        width={180}
                        height={37}
                        priority
                    />
                    <div className={'thirteen'}>
                        <p className={'font-bold text-3xl'}>404</p>
                    </div>
                </div>

                <div className={'grid'}>
                    <a
                        href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        className={'card'}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2 className={'className'}>
                            Linux <span>&rarr;</span>
                        </h2>
                        <p className={'className'}>
                            Learn About Linux and Sysadmin
                        </p>
                    </a>

                    <a
                        href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        className={'card'}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2 className={'className'}>
                            Web Dev <span>&rarr;</span>
                        </h2>
                        <p className={'className'}>
                            Learn About Web Development
                        </p>
                    </a>

                </div>
            </main>
        </Guest>
    );
}