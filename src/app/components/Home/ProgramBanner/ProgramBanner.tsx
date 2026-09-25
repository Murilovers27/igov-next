import Link from 'next/link';
import Image from 'next/image';
import styles from './ProgramBanner.module.css';

interface ProgramBannerProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export default function ProgramBanner({
  eyebrow,
  title,
  highlight,
  description,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
}: ProgramBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <Image
            src="/logo.png"
            alt="Programa Cuidar"
            width={320}
            height={100}
            className={styles.programLogo}
          />
          <h2 className={styles.title}>
            {title} <span className={styles.highlight}>{highlight}</span>
          </h2>
          <p className={styles.description}>{description}</p>
          <Link href={ctaHref} className={styles.ctaButton}>
            {ctaLabel}
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </div>
    </section>
  );
}