import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/components/section'
import { getData } from './api/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Al Itqan | Top Hajj & Umrah Travel Agency in Bangladesh',
  description: 'Al Itqan Offers Affordable, Hassle-Free Hajj & Umrah Services',
}

export default async function RootLayout({ children }) {
  const data = await getData()

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200/70`} suppressHydrationWarning={true}>
        <Header data={data}/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
