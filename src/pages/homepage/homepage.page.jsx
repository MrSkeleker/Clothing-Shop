import { useEffect, useState } from "react";

import styles from "./homepage.styles.module.scss";

import Directory from "components/directory/directory.component";
import { SECTIONS } from "utils/constants/sections";


const HomePage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(SECTIONS);
  }, [])

  return (
    <div className={styles.homepage}>
      <Directory sections={sections} />
    </div>
  );
};

export default HomePage;
