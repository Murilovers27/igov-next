import styles from './ProcessSteps.module.css';

const STEPS = [
  {
    number: '01',
    title: 'Entender',
    description: 'Compreender o contexto e as necessidades.',
    icon: (
      <span
        className={styles.iconFromAssets}
        aria-hidden="true"
        style={{ maskImage: "url('/icons/search.svg')", WebkitMaskImage: "url('/icons/search.svg')" }}
      />
    ),
  },
  {
    number: '02',
    title: 'Planejar',
    description: 'Estruturar estratégias e soluções.',
    icon: (
      <span
        className={styles.iconFromAssets}
        aria-hidden="true"
        style={{ maskImage: "url('/icons/tactic_24dp.svg')", WebkitMaskImage: "url('/icons/tactic_24dp.svg')" }}
      />
    ),
  },
  {
    number: '03',
    title: 'Executar',
    description: 'Transformar planejamento em ação.',
    icon: (
      <span
        className={styles.iconFromAssets}
        aria-hidden="true"
        style={{ maskImage: "url('/icons/motion_play_24dp.svg')", WebkitMaskImage: "url('/icons/motion_play_24dp.svg')" }}
      />
    ),
  },
  {
    number: '04',
    title: 'Acompanhar',
    description: 'Monitorar resultados e aprimorar soluções.',
    icon: (
      <span
        className={styles.iconFromAssets}
        aria-hidden="true"
        style={{ maskImage: "url('/icons/refresh_24dp.svg')", WebkitMaskImage: "url('/icons/refresh_24dp.svg')" }}
      />
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Nossa atuação</span>
          <h2 className={styles.title}>Da necessidade ao resultado.</h2>
          <p className={styles.description}>
            Atuamos de forma integrada em todas as etapas, do planejamento ao
            acompanhamento, sempre ao lado dos municípios.
          </p>
        </div>

        <div className={styles.stepsRow}>
          {STEPS.map((step, index) => (
            <div className={styles.stepWrapper} key={step.number}>
              <div className={styles.step}>
                <div className={styles.numberBadge}>{step.number}</div>
                <div className={styles.iconWrapper}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>

              {index < STEPS.length - 1 && (
                <span className={styles.arrow} aria-hidden="true">
                  <span
                    className={styles.arrowIcon}
                    aria-hidden="true"
                    style={{ maskImage: "url('/icons/arrow_forward_ios_24dp.svg')", WebkitMaskImage: "url('/icons/arrow_forward_ios_24dp.svg')" }}
                  />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}