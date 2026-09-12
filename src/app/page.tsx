import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import TeamCarousel from "./components/Home/TeamCarousel/TeamCarousel";
import styles from "./page.module.css";
import Hero from "./components/Home/Hero/Hero";
import AboutStrategy from "./components/Home/AboutStrategy/AboutStrategy";
import AreasOfWork from "./components/Home/AreasOfWork/AreasOfWork";
import ProgramBanner from "./components/Home/ProgramBanner/ProgramBanner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <AboutStrategy />
        <AreasOfWork />
        <ProgramBanner eyebrow={""} title={"Saúde"} highlight={"mais perto que quem precisa"} description={"Uma iniciativa do IGOV que leva cuidado, prevenção e dignidade para mais pessoas, por meio de unidades móveis e ações especializadas"} ctaLabel={"Conheça o programa"} ctaHref={"ProgramBannerBack"} image={"/ProgramBannerBack.png"} imageAlt={"Médica atendendo paciente em unidade móvel de saúde"}/>
      </main>
      <Footer />
    </div>
  );
}

