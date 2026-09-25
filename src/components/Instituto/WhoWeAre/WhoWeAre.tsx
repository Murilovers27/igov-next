import styles from './WhoWeAre.module.css';

export default function WhoWeAre() {
  return (
    <section id="quem-somos" className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Quem somos</span>
          <h2 className={styles.title}>
            Um instituto que transforma desafios em caminhos possíveis.
          </h2>

          <p className={styles.paragraph}>
            O IGOV é uma organização dedicada a apoiar municípios e
            instituições públicas no desenvolvimento de soluções que geram
            impacto real na vida das pessoas.
          </p>

          <p className={styles.paragraph}>
            Unimos conhecimento técnico, experiência em gestão e capacidade de
            execução para enfrentar os desafios da administração pública com
            responsabilidade, inovação e foco em resultados.
          </p>
        </div>

        <div className={styles.imagesCollage}>
          <div className={styles.imageCard}>
            <img
              src="/images/instituto-cidade-por-do-sol.jpg"
              alt="Vista aérea de cidade ao entardecer"
              className={styles.image}
            />
            <div className={styles.overlayTextBox}>
              <p className={styles.overlayText}>
                Municípios mais fortes.
                <br />
                Pessoas com mais oportunidades.
              </p>
            </div>
          </div>

          <div className={styles.imageCard}>
            <span className={styles.shapeDecoration} aria-hidden="true" />
            <img
              src="/images/instituto-onibus-cuidar.jpg"
              alt="Equipe do IGOV ao lado da unidade móvel do programa Cuidar"
              className={styles.image}
            />
            <div className={styles.logoOverlay}>
              <img src="/images/logo-igov-white.svg" alt="IGOV" className={styles.logoImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}