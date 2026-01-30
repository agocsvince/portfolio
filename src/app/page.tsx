import HeroImage from '@/components/HeroImage';
import LogoCarousel from '@/components/LogoCarousel';

export default function Home() {
  return (
    <div>
      <HeroImage />
      <div className="py-4 lg:py-8">
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
          ]}
        />
      </div>
      <h1 className="text-alternative h-40">Hello</h1>
    </div>
  );
}
