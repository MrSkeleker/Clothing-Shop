import styles from "./collection-item.styles.module.scss";

const CollectionItem = ({ _id, name, price, imageUrl }) => (
  <div className={styles.item}>
    <div
      className={styles.image}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className={styles.footer}>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
