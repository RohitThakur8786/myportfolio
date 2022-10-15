import React from 'react'
import Head from 'next/head';
import { Header, Footer } from './';

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>
          Portfolio
        </title>
      </Head>
      <header>
        <Header/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
