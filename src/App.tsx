import React from "react";

// Components
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

// CSS
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <div>
        <Header />
        <main className={styles.main}>
          <h1>Conteudo...</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
