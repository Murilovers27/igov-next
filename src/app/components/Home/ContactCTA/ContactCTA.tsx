import Image from 'next/image';
import styles from './ContactCTA.module.css';
import ContactForm from './ContactForm';

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.banner}>
          <div className={styles.imageCollage}>
            <div className={styles.imageMain}>
              <Image
                src="/AboutSt_img2.png"
                alt="Equipe do IGOV analisando dados em reunião"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 45vw, 300px"
              />
            </div>
            <div className={styles.imageSmall1}>
              <Image
                src="/AboutSt_img1.png"
                alt="Colaborador usando tablet"
                fill
                className={styles.image}
                sizes="150px"
              />
            </div>
            <div className={styles.imageSmall2}>
              <Image
                src="/ProgramBannerBack.png"
                alt="Equipe de saúde em atendimento"
                fill
                className={styles.image}
                sizes="150px"
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