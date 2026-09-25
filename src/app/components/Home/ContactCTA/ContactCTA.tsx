import Image from 'next/image';
import styles from './ContactCTA.module.css';
import ContactForm from './ContactForm';

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.banner}>
          <div className={styles.imageCollage}>
            <div className={styles.imageLeft}>
                <Image
                  src="/CTA_IMG/cons.png"
                alt="Colaborador do IGOV trabalhando com laptop e documentos"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 60vw, 260px"
              />
            </div>
            <div className={styles.imageRightTop}>
                <Image
                  src="/CTA_IMG/pink.png"
                alt="Colaboradora do IGOV conversando ao ar livre"
                fill
                className={styles.image}
                sizes="140px"
              />
            </div>
            <div className={styles.imageRightBottom}>
                <Image
                  src="/CTA_IMG/work.png"
                alt="Equipe de saúde em atendimento na unidade móvel"
                fill
                className={styles.image}
                sizes="140px"
              />
            </div>
            <span className={styles.circleDecoration} aria-hidden="true" />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
              Tem um desafio na <span className={styles.highlight}>sua gestão?</span>
            </h2>
            <p className={styles.description}>
              Vamos conversar sobre como o IGOV pode apoiar seu município ou
              instituição com soluções em saúde, tecnologia e gestão pública.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}