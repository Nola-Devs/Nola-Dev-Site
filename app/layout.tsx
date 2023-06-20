import './globals.css'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='relative select-none bg-grey lg:flex lg:items-stretch w-full'>
        <a href="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">
          <img  className={styles.logo} src='logo.png' alt='logo' width={100} height={100}/>
        </a>
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a href="/front-end-party" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Front-End Party</a>
            <a href="/below-c" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Below C</a>
            <a href="/agile-nola" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Agile Nola</a>
          </div>
        </nav>
        {children}
        </body>
    </html>
  )
}
