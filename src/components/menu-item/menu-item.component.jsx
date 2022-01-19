import styles from "./menu-item.styles.module.scss";

import { SHOP_NOW } from "utils/constants/texts";
import { useNavigate, useLocation } from "react-router";

const MenuItem = ({ title, imageUrl, linkUrl, size = "small" }) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <div
      className={`${styles[size]} ${styles.menuItem}`}
      onClick={() => navigate(`${pathname}${linkUrl}`)}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.subtitle}>{SHOP_NOW}</span>
      </div>
    </div>
  );
};

export default MenuItem;
