import styles from './AreasOfWork.module.css';
import AreaCard from './AreaCard';

const AREAS = [
  {
    title: 'Saúde',
    description:
      'Programas e serviços que ampliam o acesso, o cuidado e a qualidade da saúde pública',
    href: '/solucoes/saude',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21C12 21 4 15.5 4 9.5C4 6.46 6.46 4 9.5 4C11.24 4 12.91 4.81 14 6.09C15.09 4.81 16.76 4 18.5 4C21.54 4 24 6.46 24 9.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12H6L8 8L11 16L13 10L15 13H22"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Gestão Pública',
    description:
      'Planejamento, processos e suporte técnico para uma gestão mais eficiente, transparente e responsável.',
    href: '/solucoes/gestao-publica',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 21H21M4 21V9L12 4L20 9V21M9 21V14H15V21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Tecnologia & Dados',
    description:
      'Integração de sistemas, inteligência de dados e soluções digitais que geram informação para melhores decisões',
    href: '/solucoes/tecnologia-e-dados',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 20H16M12 16V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AreasOfWork() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>O que fazemos</span>
          <h2 className={styles.title}>Nossas áreas de atuação</h2>
        </div>

        <div className={styles.grid}>
          {AREAS.map((area) => (
            <AreaCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
              href={area.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}