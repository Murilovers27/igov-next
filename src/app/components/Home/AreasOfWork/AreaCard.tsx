import Link from 'next/link';
import styles from './AreasOfWork.module.css';

interface AreaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function AreaCard({ icon, title, description, href }: AreaCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link href={href} className={styles.cardLink}>
        Saiba mais
      </Link>
    </div>
  );
}