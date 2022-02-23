import type { NextPage } from 'next'
import Head from 'next/head'

import styles from 'styles/Page.module.scss'

import {Navbar} from 'components/Navbar';
import {Form} from 'components/Form';

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>OneSpark | Add Beneficiaries</title>
      </Head>
      <Navbar />
      <Form />
    </div>
  )
}

export default Home
