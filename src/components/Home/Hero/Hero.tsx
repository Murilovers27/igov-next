import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageBackground}>
        <Image
          src="/heroImage.png"
          alt="Médica atendendo criança com carinho"
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
      </div>

      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transformamos <span className={styles.highlight}>desafios públicos</span> em
            soluções que geram impacto.
          </h1>

          <p className={styles.subtitle}>
            Saúde, tecnologia e gestão conectadas para desenvolver e implementar
            projetos que melhoram os serviços públicos e aproximam a gestão das
            pessoas.
          </p>

          <div className={styles.actions}>
            <Link href="/solucoes" className={styles.primaryButton}>
              Conheça nossas soluções
            </Link>
            <Link href="/instituto" className={styles.secondaryButton}>
              Conheça o IGOV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}