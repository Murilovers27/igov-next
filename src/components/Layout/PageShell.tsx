import type { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
