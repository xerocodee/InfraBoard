import Icon, { Icons } from '@element/Icon/Icon';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <span className={styles.socials} data-cy={'header-socials'}>
      <a
        href={'https://github.com/xerocodee/InfraBoard'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.GITHUB} alt={'GitHub'} />
      </a>
    </span>
  </header>
);

export default Header;
