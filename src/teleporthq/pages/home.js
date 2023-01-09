import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Outgoing Cylindrical Porcupine</title>
        <meta property="og:title" content="Outgoing Cylindrical Porcupine" />
      </Helmet>
    </div>
  )
}

export default Home
