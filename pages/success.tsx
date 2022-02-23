import type { NextPage } from 'next'
import Head from 'next/head'

import styles from 'styles/Page.module.scss'
import {Navbar} from 'components/Navbar';
import { Face } from 'assets/svg';

const ThankYou: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>OneSpark | Thank you</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
          <div className={styles.box}>
          <Face width="120" height="140"/>
          <h1>Thank You!</h1>
          <p>Your beneficiaries have now been added.</p>
          </div>
      </div>
    </div>
  )
}

export default ThankYou