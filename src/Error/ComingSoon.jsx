import styles from './Module.css'
import Guest from '../Guest.jsx';
export default function ComingSoon() {

    return (
       <Guest>
           <main className='main'>
               <div className='description'>
                   <p>
                       <a href='/tutorial' className={'inline'}>
                           <code className={'code'}>Coming Soon</code>
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
                       <p className={'font-bold text-3xl'}>Coming Soon</p>
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