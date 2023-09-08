import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nextjs-boilerplate',
  description: 'made by love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col justify-center items-center`}>
        {/* <header> I am header!</header> */}
        <main className='flex-grow'>
          {children}
        </main>
        {/* <footer> i am footer</footer> */}
      </body>
    </html>
  )
}
