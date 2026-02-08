import HeroImage from '@/components/HeroImage';
import LogoCarousel from '@/components/LogoCarousel';
import ProjectTreeSection from '@/components/ProjectTreeSection';

export default function Home() {
  return (
    <div>
      <HeroImage />
      <div className="py-6 lg:py-8">
        <LogoCarousel
          logos={[
            {
              src: './assets/customers/marcz.svg',
              url: 'https://mindenamifavagas.hu',
            },
            {
              src: './assets/customers/benifilm.svg',
              url: 'https://benifilm.com',
            },
            {
              src: './assets/customers/zsalya.svg',
              url: 'https://zsalyatal.hu',
            },
            {
              src: './assets/customers/hazepitesek.svg',
              url: 'https://hazepitesek.hu',
            },
            {
              src: './assets/customers/lp.svg',
              url: 'https://levendulapiknik.hu',
            },
            {
              src: './assets/customers/pressfitness.svg',
              url: 'https://pressfitness.com',
            },
            {
              src: './assets/customers/gyuben.com.png',
              url: 'https://gyuben.com',
            },
          ]}
        />
      </div>
      <ProjectTreeSection />
    </div>
  );
}
