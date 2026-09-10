import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import AboutStrategy from "./components/Home/AboutStrategy/AboutStrategy";
import AreasOfWork from "./components/Home/AreasOfWork/AreasOfWork";
import Commitment from "./components/Home/Commitment/Commitment";
import ContactCTA from "./components/Home/ContactCTA/ContactCTA";
import ContactForm from "./components/Home/ContactForm/ContactForm";
import Hero from "./components/Home/Hero/Hero";
import LocationMap from "./components/Home/LocationMap/LocationMap";
import PartnersLogos from "./components/Home/PartnersLogos/PartnersLogos";
import ProgramBanner from "./components/Home/ProgramBanner/ProgramBanner";
import TeamCarousel from "./components/Home/TeamCarousel/TeamCarousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main><Hero /><AboutStrategy /><AreasOfWork /><ProgramBanner /><TeamCarousel /><PartnersLogos /><Commitment /><ContactCTA /><ContactForm /><LocationMap /></main>
      <Footer />
    </div>
  );
}
