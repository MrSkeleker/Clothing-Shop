import CollectionItem from "components/collection-item/collection-item.component";
import styles from "./preview-collection.styles.module.scss";

const PreviewCollection = ({ title, items }) => (
  <div className={styles.collection}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.preview}>
      {items
        .filter((_item, index) => index < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
