import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
  {
    title: 'Navegação',
    links: [
      { label: 'Instituto', href: '/instituto' },
      { label: 'Soluções', href: '/solucoes' },
      { label: 'Programa Cuidar', href: '/programa-cuidar' },
      { label: 'Projetos', href: '/projetos' },
      { label: 'Transparência', href: '/transparencia' },
      { label: 'Contato', href: '/fale-conosco' },
    ],
  },
  {
    title: 'Nossas soluções',
    links: [
      { label: 'Saúde', href: '/solucoes/saude' },
      { label: 'Tecnologia & Dados', href: '/solucoes/tecnologia-e-dados' },
      { label: 'Gestão Pública', href: '/solucoes/gestao-publica' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.topGrid}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <Image src="/igov_sem_fundo.png" alt="IGOV" width={110} height={30} />
            </Link>
            <p className={styles.brandText}>
              Conectando gestão, pessoas e soluções para um futuro melhor nos municípios.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:contato@gestaoigov.org" className={styles.link}>
                  contato@igov.org.br
                </a>
              </li>
              <li className={styles.contactItem}>Sorocaba - SP - Brasil</li>
              
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} IGOV – Instituto de Relações Municipais e Governamentais. Todos os direitos reservados.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/politica-de-privacidade" className={styles.legalLink}>
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className={styles.legalLink}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}