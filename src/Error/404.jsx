import { useRouteError } from 'react-router-dom';
import Guest from '../Guest.jsx';
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Guest>
            <style>
                {`
                :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;

    --primary-glow: conic-gradient(
            from 180deg at 50% 50%,
            #16abff33 0deg,
            #0885ff33 55deg,
            #54d6ff33 120deg,
            #0071ff33 160deg,
            transparent 360deg
    );
    --secondary-glow: radial-gradient(
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
    );

    --tile-start-rgb: 239, 245, 249;
    --tile-end-rgb: 228, 232, 233;
    --tile-border: conic-gradient(
            #00000080,
            #00000040,
            #00000030,
            #00000020,
            #00000010,
            #00000010,
            #00000080
    );

    --callout-rgb: 238, 240, 241;
    --callout-border-rgb: 172, 175, 176;
    --card-rgb: 180, 185, 188;
    --card-border-rgb: 131, 134, 135;
}

@media (prefers-color-scheme: dark) {
    :root {
        --foreground-rgb: 255, 255, 255;
        --background-start-rgb: 0, 0, 0;
        --background-end-rgb: 0, 0, 0;

        --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
        --secondary-glow: linear-gradient(
                to bottom right,
                rgba(1, 65, 255, 0),
                rgba(1, 65, 255, 0),
                rgba(1, 65, 255, 0.3)
        );

        --tile-start-rgb: 2, 13, 46;
        --tile-end-rgb: 2, 5, 19;
        --tile-border: conic-gradient(
                #ffffff80,
                #ffffff40,
                #ffffff30,
                #ffffff20,
                #ffffff10,
                #ffffff10,
                #ffffff80
        );

        --callout-rgb: 20, 20, 20;
        --callout-border-rgb: 108, 108, 108;
        --card-rgb: 100, 100, 100;
        --card-border-rgb: 200, 200, 200;
    }
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,
body {
    max-width: 100vw;
    overflow-x: hidden;
}

body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
            to bottom,
            transparent,
            rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

a {
    color: inherit;
    text-decoration: none;
}

@media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
    }
}


.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6rem;
    min-height: 100vh;
}

.description {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    font-size: 0.85rem;
    max-width: var(--max-width);
    width: 100%;
    z-index: 2;
    font-family: var(--font-mono);
}



.description a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.description p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
}

.code {
    font-weight: 700;
    font-family: var(--font-mono);
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(25%, auto));
    width: var(--max-width);
    max-width: 100%;
}

.card {
    padding: 1rem 1.2rem;
    border-radius: var(--border-radius);
    background: rgba(var(--card-rgb), 0);
    border: 1px solid rgba(var(--card-border-rgb), 0);
    transition: background 200ms, border 200ms;
}

.card span {
    display: inline-block;
    transition: transform 200ms;
}

.card h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
}

.card p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 4rem 0;
}

.center::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
}

.center::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
}

.center::before,
.center::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
}

.logo,
.thirteen {
    position: relative;
}

.thirteen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 25px 10px;
    margin-left: 16px;
    transform: translateZ(0);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0px 2px 8px -1px #0000001a;
}

.thirteen::before,
.thirteen::after {
    content: '';
    position: absolute;
    z-index: -1;
}

/* Conic Gradient Animation */
.thirteen::before {
    animation: 6s rotate linear infinite;
    width: 200%;
    height: 200%;
    background: var(--tile-border);
}

/* Inner Square */
.thirteen::after {
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: linear-gradient(
            to bottom right,
            rgba(var(--tile-start-rgb), 1),
            rgba(var(--tile-end-rgb), 1)
    );
    background-clip: content-box;
}

/* Enable hover only on non-touch devices */
@media (hover: hover) and (pointer: fine) {
    .card:hover {
        background: rgba(var(--card-rgb), 0.1);
        border: 1px solid rgba(var(--card-border-rgb), 0.15);
    }

    .card:hover span {
        transform: translateX(4px);
    }
}

@media (prefers-reduced-motion) {
    .thirteen::before {
        animation: none;
    }

    .card:hover span {
        transform: none;
    }
}

/* Mobile */
@media (max-width: 700px) {
    .content {
        padding: 4rem;
    }

    .grid {
        grid-template-columns: 1fr;
        margin-bottom: 120px;
        max-width: 320px;
        text-align: center;
    }

    .card {
        padding: 1rem 2.5rem;
    }

    .card h2 {
        margin-bottom: 0.5rem;
    }

    .center {
        padding: 8rem 0 6rem;
    }

    .center::before {
        transform: none;
        height: 300px;
    }

    .description {
        font-size: 0.8rem;
    }

    .description a {
        padding: 1rem;
    }

    .description p,
    .description div {
        display: flex;
        justify-content: center;
        position: fixed;
        width: 100%;
    }

    .description p {
        align-items: center;
        inset: 0 0 auto;
        padding: 2rem 1rem 1.4rem;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
        background: linear-gradient(
                to bottom,
                rgba(var(--background-start-rgb), 1),
                rgba(var(--callout-rgb), 0.5)
        );
        background-clip: padding-box;
        backdrop-filter: blur(24px);
    }

    .description div {
        align-items: flex-end;
        pointer-events: none;
        inset: auto 0 0;
        padding: 2rem;
        height: 200px;
        background: linear-gradient(
                to bottom,
                transparent 0%,
                rgb(var(--background-end-rgb)) 40%
        );
        z-index: 1;
    }
}

/* Tablet and Smaller Desktop */
@media (min-width: 701px) and (max-width: 1120px) {
    .grid {
        grid-template-columns: repeat(2, 50%);
    }
}

@media (prefers-color-scheme: dark) {
    .vercelLogo {
        filter: invert(0);
    }

    .logo,
    .thirteen img {
        filter: invert(0) drop-shadow(0 0 0.3rem #ffffff70);
    }
}

@keyframes rotate {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}

                `}
            </style>
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