import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import TeamCarousel from "./components/Home/TeamCarousel/TeamCarousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

