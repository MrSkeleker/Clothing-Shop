import React from "react";
import styles from "./directory.styles.module.scss";

import MenuItem from "components/menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className={styles.directory}>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

export default Directory;
