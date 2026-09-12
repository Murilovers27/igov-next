import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutStrategy.module.css';

export default function AboutStrategy() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.imageCollage}>
          <div className={styles.imageBottom}>
            <Image
              src="/AboutSt_img2.png"
              alt="Colaboradores do IGOV em reunião de planejamento de projetos"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 90vw, 480px"
            />
          </div>

          <div className={styles.imageTop}>
            <Image
              src="/AboutSt_img1.png"
              alt="Equipe do IGOV conversando ao ar livre"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 90vw, 480px"
            />
          </div>

          <span className={styles.circleDecoration} aria-hidden="true" />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Sobre nós</span>
          <h2 className={styles.title}>
            Estratégia para planejar{' '}
            <span className={styles.highlight}>Soluções para executar</span>
          </h2>

          <p className={styles.description}>
            Somos um instituto que atua ao lado de municípios e instituições
            públicas no desenvolvimento, implementação e gestão de projetos que
            respondem aos desafios reais da administração pública.
          </p>

          <Link href="/instituto" className={styles.ctaButton}>
            Conheça o instituto
          </Link>
        </div>
      </div>
    </section>
  );
}