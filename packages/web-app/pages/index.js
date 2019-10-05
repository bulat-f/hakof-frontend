import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>

    <div>
      <h1>Hakof</h1>
    </div>
  </div>
)

export default Home
