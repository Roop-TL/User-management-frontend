import Link from "next/link";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h5 className={styles.logo}>TL-User Management</h5>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/users">Users</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/roles">Roles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
