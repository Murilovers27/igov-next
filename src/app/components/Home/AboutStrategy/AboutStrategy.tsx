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

          <div className={styles.ctaRow}>
            <Link href="/instituto" className={styles.ctaButton}>
              Conheça o instituto
            </Link>

            <button
              className={styles.playButton}
              aria-label="Assistir vídeo institucional do IGOV"
              type="button"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 0C25.8717 0 33.3333 7.46167 33.3333 16.6667C33.3333 25.8717 25.8717 33.3333 16.6667 33.3333C7.46167 33.3333 0 25.8717 0 16.6667C0 7.46167 7.46167 0 16.6667 0ZM11.6067 11.0833L11.5183 11.9167L11.4683 12.4717L11.3983 13.4717L11.3583 14.2383L11.3283 15.08L11.3117 15.995V16.9583L11.3283 17.8733L11.3583 18.7167L11.3983 19.4833L11.4683 20.4833L11.5867 21.7L11.6083 21.87C11.6452 22.1761 11.7528 22.4695 11.9226 22.7268C12.0924 22.9841 12.3198 23.1984 12.5868 23.3527C12.8538 23.5069 13.153 23.5969 13.4607 23.6156C13.7685 23.6342 14.0764 23.5809 14.36 23.46L15.12 23.1233L16.205 22.6083L16.855 22.2817L17.5717 21.9083L18.3483 21.4867L19.1783 21.0167L20 20.5333L20.385 20.3L21.1017 19.85L21.7483 19.4333L22.3183 19.0517L23.4067 18.285L23.7017 18.0667C23.9486 17.8815 24.1489 17.6414 24.2869 17.3653C24.4248 17.0893 24.4966 16.7849 24.4964 16.4762C24.4962 16.1676 24.4242 15.8633 24.2859 15.5874C24.1477 15.3115 23.9471 15.0716 23.7 14.8867L23.0233 14.3917L22.565 14.07L22.0317 13.7067L21.09 13.0933L20.3767 12.6467L19.5933 12.1767L18.7617 11.6967L17.965 11.255L17.22 10.8583L16.5367 10.5083L15.6367 10.07L14.905 9.73333L14.5217 9.56333C14.469 9.54095 14.4162 9.51873 14.3633 9.49667C14.0797 9.37478 13.7716 9.32067 13.4634 9.33863C13.1552 9.35658 12.8555 9.44611 12.5879 9.60011C12.3204 9.7541 12.0924 9.96833 11.9221 10.2258C11.7517 10.4833 11.6437 10.7769 11.6067 11.0833Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}