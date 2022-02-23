
import { HeaderProps } from '../Form.types';

import styles from '../Form.module.scss';

import {Face} from 'assets/svg';
 
const Header: React.FC<HeaderProps> = ({headerPhrase}) => {
  return (
    <div className={styles.header}>
      <Face width="120" height="140"/>
      {headerPhrase && 
      <p className={styles.phrase}>
        {headerPhrase}
      </p>
      }
    </div>
  )
}

export default Header;