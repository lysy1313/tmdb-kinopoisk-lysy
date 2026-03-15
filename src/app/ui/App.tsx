import { Routing } from "@/common/routing/Routing";
import { Header } from "@/common/components/Header/Header";
import { Footer } from "@/common/components/Footer/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
