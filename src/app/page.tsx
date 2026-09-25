import PageShell from "@/components/Layout/PageShell";
import TeamCarousel from "@/components/Home/TeamCarousel/TeamCarousel";
import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import AboutStrategy from "@/components/Home/AboutStrategy/AboutStrategy";
import AreasOfWork from "@/components/Home/AreasOfWork/AreasOfWork";
import ProgramBanner from "@/components/Home/ProgramBanner/ProgramBanner";
import PartnersLogos from "@/components/Home/PartnersLogos/PartnersLogos";
import Commitment from "@/components/Home/Commitment/Commitment";
import ContactCTA from "@/components/Home/ContactCTA/ContactCTA";
import LocationMap from "@/components/Home/LocationMap/LocationMap";

export default function Home() {
  return (
    <PageShell>
      <div className={styles.page}>
        <main>
        <Hero />
        <AboutStrategy />
        <AreasOfWork />
        <ProgramBanner eyebrow={"Programa"} title={"Saúde mais perto"} highlight={"de quem precisa"} description={"Uma iniciativa do IGOV que leva cuidado, prevenção e dignidade para mais pessoas, por meio de unidades móveis e ações especializadas"} ctaLabel={"Conheça o programa"} ctaHref={"/programa-cuidar"} image={"/ProgramBannerBack.png"} imageAlt={"Médica atendendo paciente em unidade móvel de saúde"}/>
        <TeamCarousel />
        <PartnersLogos />
        <Commitment />
        <ContactCTA />
        <LocationMap /> 
        </main>
      </div>
    </PageShell>
  );
}

