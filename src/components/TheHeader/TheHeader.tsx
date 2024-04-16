import styles from './TheHeader.module.scss';
import { ThemeSwitcher } from 'components/ThemeSwitcher'

export const TheHeader = () => (
  <div className={styles.header}>
   <div className={styles.logo}>Github User Finder</div>
   <ThemeSwitcher/>
  </div>
);
