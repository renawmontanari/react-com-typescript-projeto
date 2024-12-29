import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        MinhaNuvem <i class="bi bi-clouds-fill"></i>
      </h1>
    </header>
  );
};

export default Header;
