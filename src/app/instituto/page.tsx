import PageShell from '@/components/Layout/PageShell';
import InstitutoPage from '@/components/Instituto/Instituto';
import WhoWeAre from '@/components/Instituto/WhoWeAre/WhoWeAre';
import ProcessSteps from '@/components/Instituto/ProcessSteps/ProcessSteps';

export default function InstitutoRoute() {
  return (
    <PageShell>
      <InstitutoPage />
      <WhoWeAre />
      <ProcessSteps />
    </PageShell>
  );
}
