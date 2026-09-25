'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Instituto', href: '/instituto' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Programa Cuidar', href: '/programa-cuidar' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Transparência', href: '/transparencia' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/igov_sem_fundo.png"
            alt="IGOV - Instituto de Relações Municipais e Governamentais"
            width={130}
            height={50}
            priority
          />
        </Link>

        {/* Nav desktop — escondida no mobile via CSS */}
        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/fale-conosco" className={styles.ctaButton}>
          Fale Conosco
        </Link>

        {/* Botão hambúrguer — só aparece no mobile via CSS */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.menuIconBar} ${menuOpen ? styles.iconOpenTop : ''}`} />
          <span className={`${styles.menuIconBar} ${menuOpen ? styles.iconOpenHide : ''}`} />
          <span className={`${styles.menuIconBar} ${menuOpen ? styles.iconOpenBottom : ''}`} />
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Navegação mobile"
      >
        <ul className={styles.mobileNavList}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/fale-conosco"
              className={styles.ctaButtonMobile}
              onClick={() => setMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}