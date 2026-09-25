import Image from 'next/image';
import styles from './PartnersLogos.module.css';

const PARTNERS = [
  { name: 'Prefeitura de Sarapuí', logo: '/Patners/Sarapui.png' },
  { name: 'Governo do Estado do Rio de Janeiro', logo: '/Patners/RioDeJaneiro.png' },
  { name: 'Prefeitura de Capela do Alto', logo: '/Patners/CapelaDoAlto.png' },
  { name: 'Prefeitura de Cerquilho', logo: '/Patners/Cerquilho.png' },
  { name: 'Governo de Pernambuco', logo: '/Patners/Pernambuco.png' },
];

export default function PartnersLogos() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.track}>
          {PARTNERS.map((partner) => (
            <div className={styles.logoWrapper} key={partner.name}>
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className={styles.logo}
                sizes="140px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}