import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import TeamCarousel from "./components/Home/TeamCarousel/TeamCarousel";
import styles from "./page.module.css";
import Hero from "./components/Home/Hero/Hero";
import AboutStrategy from "./components/Home/AboutStrategy/AboutStrategy";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <AboutStrategy />
      </main>
      <Footer />
    </div>
  );
}

