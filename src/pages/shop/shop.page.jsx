import { useEffect, useState } from "react";

import styles from "./shop.styles.module.scss";

import { SHOP_DATA } from "utils/constants/shopping";
import PreviewCollection from "components/preview-collection/preview-collection.component";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(SHOP_DATA);
  }, []);

  return (
    <div className={styles.shop}>
      {categories.map(({ id, ...collectionProps }) => (
        <PreviewCollection key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
