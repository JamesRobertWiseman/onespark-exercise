import Link from 'next/link';

import styles from './Navbar.module.scss';

import { Logo } from 'assets/svg';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.column}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <a title='Home'>
            <Logo  width="111" height="24"/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header