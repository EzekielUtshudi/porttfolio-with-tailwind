// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
    <main >
      <section className='min-h-screen'>
          <nav>
            <h1>Fullstack Developper</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill/>
              </li>
              <li><a href='#'>Resume</a></li>
            </ul>
          </nav>
      </section>
    </main>
  )
}
