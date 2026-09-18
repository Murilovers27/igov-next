import Image from 'next/image';
import styles from './Commitment.module.css';

const AVATAR_PHOTOS = [
  { src: '/Commitment/Image1.png', alt: 'Colaboradora do IGOV' },
  { src: '/Commitment/Image2.png', alt: 'Colaboradora do IGOV' },
  { src: '/Commitment/Image3.png', alt: 'Colaboradora do IGOV' },
  { src: '/Commitment/Image4.png', alt: 'Colaboradora do IGOV' },
  { src: '/Commitment/Image5.png', alt: 'Colaborador do IGOV' },
];

export default function Commitment() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.collage}>
          <span className={styles.shapeDark} aria-hidden="true" />
          <span className={styles.shapeOrange} aria-hidden="true" />

          {AVATAR_PHOTOS.map((avatar, index) => (
            <div
              key={avatar.src}
              className={`${styles.avatarWrapper} ${styles[`avatar${index + 1}`]}`}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                fill
                className={styles.avatarImage}
                sizes="80px"
              />
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Nosso compromisso</span>
          <h2 className={styles.title}>Compromisso com a gestão pública</h2>

          <blockquote className={styles.quoteBox}>
            <svg
              className={styles.quoteIcon}
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M11.5 0L6 9H11V22H0V9.5L5 0H11.5ZM28 0L22.5 9H27.5V22H16.5V9.5L21.5 0H28Z"
                fill="currentColor"
              />
            </svg>
            <p className={styles.quoteText}>
              Acreditamos em uma gestão pública mais eficiente, humana e próxima
              das pessoas. Por isso, transformamos desafios em soluções que unem
              estratégia, inovação e capacidade de execução
            </p>
            <div className={styles.quoteAuthor}>
              <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0449 15.4778C21.1953 16.291 25.1967 20.0709 28.049 26.8177C18.4884 -8.04033 -14.4097 14.0259 7.23696 32.8946C12.8928 37.1295 18.2624 38.4131 23.3458 36.7454C12.3973 32.9992 3.80581 14.8848 16.0448 15.4777L16.0449 15.4778Z" fill="url(#paint0_linear_0_266)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.0143 26.5255C30.6414 29.6524 29.5695 31.6447 28.7984 32.5023C28.9486 28.7967 28.9223 26.1672 28.7198 24.6137C27.154 7.25827 38.7503 6.15985 42.7852 11.7513C51.5212 23.8572 28.4493 51.2023 11.4087 36.8668C17.6186 39.5866 22.9626 39.1571 27.4407 35.5782C33.3372 30.2504 36.7076 24.8051 37.5517 19.2422C35.8599 20.0794 34.0141 22.5071 32.0143 26.5255Z" fill="#FF6A00"/>
<path d="M35.2483 15.6083C36.8257 15.056 38.0129 16.3157 37.5521 19.2865C35.8934 19.8052 33.4974 23.2948 31.3318 28.0104L32.0229 21.2199C32.4133 18.2372 33.4974 16.2214 35.2483 15.6083Z" fill="#102533"/>
<ellipse cx="25.0193" cy="5.42292" rx="5.2988" ry="5.42292" fill="#FF6A01"/>
<defs>
<linearGradient id="paint0_linear_0_266" x1="7.92516" y1="8.39353" x2="26.1115" y2="52.5275" gradientUnits="userSpaceOnUse">
<stop offset="0.747799" stop-color="#102533"/>
<stop offset="0.934167" stop-color="#FF6A00"/>
</linearGradient>
</defs>
</svg>

              <span>
                <strong>IGOV</strong> · Instituto de Relações Municipais e
                Governamentais
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}