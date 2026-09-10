import TeamCard from "../TeamCard/TeamCard";
import styles from "./TeamCarousel.module.css";

export default function TeamCarousel() { return <section className={styles.section} id="team"><h2>Gente que faz acontecer</h2><div className={styles.list}><TeamCard name="Nome da pessoa" role="Estratégia" /><TeamCard name="Nome da pessoa" role="Pesquisa e impacto" /><TeamCard name="Nome da pessoa" role="Gestão de projetos" /></div></section>; }
