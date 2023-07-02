import "@/styles/globals.css"
import Navbar from '@/components/navbar/Navbar'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from "@/context/ThemeContext"
import AuthProvider from "@components/AuthProvider/AuthProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Clodron",
  description: 'This is description.',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
            <div className='gradient' />
        </div>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
            <Navbar />
            {children}
            <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;