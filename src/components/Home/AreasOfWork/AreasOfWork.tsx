import styles from './AreasOfWork.module.css';
import AreaCard from './AreaCard';

const AREAS = [
  {
    title: 'Saúde',
    description:
      'Programas e serviços que ampliam o acesso, o cuidado e a qualidade da saúde pública',
    href: '/solucoes/saude',
    icon: (
      <span
        className={styles.iconFromAssets}
        aria-hidden="true"
        style={{ maskImage: "url('/icons/cardiology_24dp.svg')", WebkitMaskImage: "url('/icons/cardiology_24dp.svg')" }}
      />
    ),
  },
  {
    title: 'Gestão Pública',
    description:
      'Planejamento, processos e suporte técnico para uma gestão mais eficiente, transparente e responsável.',
    href: '/solucoes/gestao-publica',
    icon: (
      <span
        className={styles.iconFromAssets}
        aria-hidden="true"
        style={{ maskImage: "url('/icons/display_group_24d.svg')", WebkitMaskImage: "url('/icons/display_group_24d.svg')" }}
      />
    ),
  },
  {
    title: 'Tecnologia & Dados',
    description:
      'Integração de sistemas, inteligência de dados e soluções digitais que geram informação para melhores decisões',
    href: '/solucoes/tecnologia-e-dados',
    icon: (
      <span
        className={styles.iconFromAssets}
        aria-hidden="true"
        style={{ maskImage: "url('/icons/flowsheet_24dp_.svg')", WebkitMaskImage: "url('/icons/flowsheet_24dp_.svg')" }}
      />
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