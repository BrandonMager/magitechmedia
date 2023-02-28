import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import AgencyServices from './Services'
import AgencyProcess from './Process'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Intro />
      <About />
      <AgencyServices />
      <AgencyProcess />
      <Footer />
    </>
  )
}
