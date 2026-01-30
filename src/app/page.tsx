import HeroImage from '@/components/HeroImage';
import LogoCarousel from '@/components/LogoCarousel';

export default function Home() {
  return (
    <div>
      <HeroImage />
      <div className="py-4 lg:py-8">
        <LogoCarousel
          logos={[
            './assets/customers/marcz.svg',
            './assets/customers/benifilm.svg',
            './assets/customers/zsalya.svg',
            './assets/customers/hazepitesek.svg',
            './assets/customers/lp.svg',
            './assets/customers/pressfitness.svg',
          ]}
        />
      </div>
      <h1 className="text-alternative h-40">Hello</h1>
    </div>
  );
}
