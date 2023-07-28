import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// * importing components
import HomePage from '../components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>The coolest app ever built during a hackathon</h1>
      <HomePage/>
    </>
  )
}
