import Search from "../subComponents/search/Search";
import Logo from "../subComponents/logo/Logo";
import styles from "./Header.module.css";
import logosmall from "../../assets/logosmall.jpg";

const Header = () => {
  // add auto selection of img-size based on screen-size to props value logoSrc
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Logo logoSrc={logosmall} altText="I-Organize Logo" />
        </div>
        <div className={styles.searchContainer}>
          <Search />
        </div>
      </header>
    </>
  );
};

export default Header;
