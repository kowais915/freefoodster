import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// * importing components
import HomePage from '../components/HomePage'
import Main from '@/components/Main'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      
      <HomePage/>

    
    </Layout>
  )
}
