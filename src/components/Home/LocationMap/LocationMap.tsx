import styles from './LocationMap.module.css';

const CONTACT_INFO = {
  address: 'Rua Fernando Silva, 190 – Sala 511, Jardim Astro – Sorocaba/SP CEP 18017-034',
  email: 'contato@gestaoigov.org',
  hours: 'Seg-Sex 08:00-18:00',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0!2d-47.4!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0N8KwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890',
};

export default function LocationMap() {
  return (
    <section className={styles.section}>
      <div className={styles.mapWrapper}>
        <iframe
          src={CONTACT_INFO.mapEmbedUrl}
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do IGOV no mapa"
          allowFullScreen
        />
      </div>

      <div className={`${styles.container} container`}>
        <div className={styles.infoCard}>
          <h3 className={styles.cardTitle}>Contato</h3>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </span>
            <p>{CONTACT_INFO.address}</p>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <p>{CONTACT_INFO.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}