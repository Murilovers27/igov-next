'use client';

import { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './TeamCarousel.module.css';
import TeamCard from '../TeamCard/TeamCard';

const TEAM_MEMBERS = [
  {
    photo: '/team/PedroCruz.png',
    name: 'Pedro Cruz',
    role: 'CEO',
    bio: 'Especialista em gestão pública e administração da saúde.',
    socials: [
      { platform: 'linkedin' as const, href: '#' },
      { platform: 'github' as const, href: '#' },
      { platform: 'instagram' as const, href: '#' },
    ],
  },
  {
    photo: '/team/DeniseMathias.png',
    name: 'Denise Mathias',
    role: 'Diretora Faturamento SUS',
    bio: 'Especialista em sistemas de saúde e faturamento SUS.',
    socials: [
      { platform: 'linkedin' as const, href: '#' },
      { platform: 'github' as const, href: '#' },
      { platform: 'instagram' as const, href: '#' },
    ],
  },
  {
    photo: '/team/CileneCruz.png',
    name: 'Cilene Cruz',
    role: 'CTO',
    bio: 'Especialista em educação inclusiva e gestão educacional',
    socials: [
      { platform: 'linkedin' as const, href: '#' },
      { platform: 'github' as const, href: '#' },
      { platform: 'instagram' as const, href: '#' },
    ],
  },
  {
    photo: '/team/BrenoCaio.png',
    name: 'Breno Caio',
    role: 'Diretor de Inovação Digital',
    bio: 'Especialista em tecnologia, inovação e soluções para o setor público.',
    socials: [
      { platform: 'linkedin' as const, href: '#' },
      { platform: 'github' as const, href: '#' },
      { platform: 'instagram' as const, href: '#' },
    ],
  },
  {
    photo: '/team/FernandoFreitas.png',
    name: 'Fernando Freitas',
    role: 'Analista da Atenção Primária no Ministério da Saúde',
    bio: 'Especialista em gestão, qualidade e atenção à saúde.',
    socials: [
      { platform: 'linkedin' as const, href: '#' },
      { platform: 'github' as const, href: '#' },
      { platform: 'instagram' as const, href: '#' },
    ],
  },
  {
    photo: '/team/MuriloPires.png',
    name: 'Murilo Cruz',
    role: 'Analista de Sistemas',
    bio: 'Atua com sistemas, tecnologia e suporte às soluções digitais.',
    socials: [
      { platform: 'linkedin' as const, href: '#' },
      { platform: 'github' as const, href: '#' },
      { platform: 'instagram' as const, href: '#' },
    ],
  },
];

export default function TeamCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    const frame = requestAnimationFrame(onSelect);

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Nosso Time</span>
            <h2 className={styles.title}>Pessoas por trás das soluções</h2>
          </div>

          <div className={styles.navButtons}>
            <button
              className={styles.navButton}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Ver membro anterior"
              type="button"
            >
              <span
                className={styles.navIcon}
                aria-hidden="true"
                style={{ maskImage: "url('/icons/arrow_back_ios.svg')", WebkitMaskImage: "url('/icons/arrow_back_ios.svg')" }}
              />
            </button>
            <button
              className={styles.navButton}
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Ver próximo membro"
              type="button"
            >
              <span
                className={styles.navIcon}
                aria-hidden="true"
                style={{ maskImage: "url('/icons/arrow_forward_ios_24dp.svg')", WebkitMaskImage: "url('/icons/arrow_forward_ios_24dp.svg')" }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.viewport} ref={emblaRef}>
        <div className={`${styles.track} container`}>
          {TEAM_MEMBERS.map((member) => (
            <div className={styles.slide} key={member.name}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}